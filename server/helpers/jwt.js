const { sign, verify } = require("jsonwebtoken");

const generateToken = (payload) => sign(payload, process.env.JWT_SECRET);
const decodeToken = (token) => verify(token, process.env.JWT_SECRET);

module.exports = {
  generateToken,
  decodeToken,
};
