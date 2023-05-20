import jwt, { verify } from "jsonwebtoken";

function authware(req, res, next) {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send('Access denied');
  }

  try {
    const verified = jwt.verify(token, process.env.SECRET);
    req.user = verified;
    next();
  } catch (err) {
    return res.status(401).send('Invalid token');
  }
}

export {
  authware
};
