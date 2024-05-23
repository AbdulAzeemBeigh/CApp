import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const protect = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "No Token Provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Invalid Token" });
    }
    const user = await User.findById(decoded.userID).select("-password");
    req.user = user;
    next();
  } catch (error) {
    console.log("protect Route middleware error", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export default protect;
