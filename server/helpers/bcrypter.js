const { hashSync, compareSync } = require("bcryptjs");

const hashPassword = (password) => hashSync(password);
const validPassword = (password, hashedPassword) => compareSync(password, hashedPassword);

module.exports = {hashPassword, validPassword}