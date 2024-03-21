const { decodeToken } = require("../helpers/jwt");
const { User } = require("../models/index");

export const verificationUser = async (req, res, next) => {
  try {
    const { access_token } = req.headers.authorization;
    if (!access_token) {
      throw { name: "UNAUTHORIZED" };
    }
    const { id } = decodeToken(access_token);
    const validUser = await User.findByPK(id);
    if (!validUser) {
      throw { name: "UNAUTHORIZED" };
    }
    req.user = {
      id: validUser.id,
      name : validUser.name,
      phoneNumber : validUser.phoneNumber
    };
    next();
  } catch (err) {
    next(err);
  }
};
