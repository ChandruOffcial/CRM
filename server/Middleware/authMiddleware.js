const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
/** Verify Roll */
const verifyRoll = async (req, res, next) => {
  try {
    if (!req.headers.cookie) {
      return res
        .status(401)
        .json({ error: "Unauthorized User: No token provided" });
    }
    console.log(req.Headers);
    const token = req.headers.cookie.split("=")[1];
    await jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ error: "Unauthorized User: Invalid token" });
      } else {
        req.user = decoded;
        next();
      }
    });
  } catch (error) {
    console.error("Error During User Verify:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/** Verify User */
const verifyUser = async (req, res, next) => {
  try {
    const { userName } = req.body;
    const user = await userModel.findOne({ userName });
    if (!user) {
      return res.status(404).json({ error: "UserName Not Found" });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    console.error("Error During User Verify:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  verifyRoll,
  verifyUser,
};
