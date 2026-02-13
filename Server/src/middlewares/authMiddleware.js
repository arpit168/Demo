import jwt from "jsonwebtoken";
import User from "../models/userModel";

export const Protect = async (req, res, next) => {
  try {
    const demo = req.cookies.arpit;
    console.log("Token recieved in Cookies:", demo);

    const gupta = jwt.verify(demo, process.env.JWT_SECRET);

    console.log(gupta);
    if (!gupta) {
      const error = new Error("Unauthorized! Please Login Again");
      error.statusCode = 401;
      return next(error);
    }

    const verifiedUser = await User.findById(gupta.id);
    if (!verifiedUser) {
      const error = new Error("Unauthorezed! Please Login Again");
      error.statusCode = 401;
      return next(error);
    }

    req.user = verifiedUser;

    next();
  } catch (error) {
    next(error);
  }
};
