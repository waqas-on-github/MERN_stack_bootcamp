import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

var userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,    
    selected : false
  },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }

    const hashed = await bcrypt.hash(this.password, 10);
    this.password = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparepass = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    return err;
  }
};

const User = model('User', userSchema);

export { User };




