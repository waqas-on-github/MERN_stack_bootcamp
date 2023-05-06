import mongoose from "mongoose";
import bcrypt from  'bcryptjs'

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String },
  password: { type: String },
  joined: { type: Date, default: Date.now }
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    return next();
  }
});

const userModel = mongoose.model("userModel", userSchema);

export { userModel };
