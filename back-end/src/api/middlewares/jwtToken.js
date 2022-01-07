const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const jwtSecret = fs
.readFileSync(path.normalize(`${__dirname}/../../../jwt.evaluation.key`), 'utf8');

const generateToken = (email, userId, role) => {
  const payload = {
    email,
    userId,
    role,
  };
  
  return jwt.sign(payload, jwtSecret);
};

const authenticateToken = (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) throw new Error('MISSING_TOKEN');

  try {
    const payload = jwt.verify(token, jwtSecret);
    req.user = payload;
    return next();
  } catch (err) {
    throw new Error('INVALID_TOKEN');
  }
 };

module.exports = {
  generateToken,
  authenticateToken,
};