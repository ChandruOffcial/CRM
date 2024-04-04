const userModel = require("../model/userModel");
const authHelper = require("../helper/auth");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

/** POST: http://localhost:8000/api/register 
 * @param : {
  "userName": "Chandru",
  "email":"justin.scratch.7@gmail.com",
  "password":"123456",
  "roll":"admin",
  "OTP":""
}
*/
const registerUser = async (req, res) => {
  try {
    const { userName, password, roll, email } = req.body;

    if (!userName || !password || !roll || !email) {
      return res.status(400).json({
        error: "All fields are required ",
      });
    } else if (userName.includes(" ") || password.includes(" ")) {
      return res.status(400).json({ error: "Enter valid username and password" });
    }

    // Check if email already exists
    const existEmail = await userModel.findOne({ email });
    if (existEmail) {
      return res.status(409).json({ error: "Email is already taken" });
    }

    // Check if username already exists
    const existName = await userModel.findOne({ userName });
    if (existName) {
      return res.status(409).json({ error: "Username is already taken" });
    }

    const hashpassword = await authHelper.hashedPassword(password);

    const user = await userModel.create({
      userName,
      password: hashpassword,
      roll,
      email,
    });

    return res.status(201).json({ message: "Register successful", userDetails: user });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error during Register:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/** POST: http://localhost:8000/api/login
 * @param : {
  "userName": "Chandru",  
  "password":"123456"
}
*/
const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // check username in db
    const user = await userModel.findOne({ userName });
    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    }

    // compare Password
    const match = await authHelper.comparePassword(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Incorrect username or password" });
    }

    //WebToken
    if (match) {
      const token = await authHelper.generateToken(user);
      res.clearCookie("token");
      res.cookie("token", token);
      return res.status(200).json({ message: "Authentication successful" });
    }
  } catch (error) {
    console.error("Error During Login");
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/** POST: http://localhost:8000/api/forgotPassword 
 * @param : {
  "userName": "Chandru"  
}
*/
const generateOTP = async (req, res) => {
  try {
    const user = req.user;

    // Generate OTP
    const OTP = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });
    const userId = user._id;
    // Update OTP
    await userModel.findByIdAndUpdate(userId, { OTP: OTP });
    //Set Cookie

    res.clearCookie("forgotPass");
    res.clearCookie("token");
    const forgotPass = await authHelper.generateToken(user);
    res.cookie("forgotPass", forgotPass);

    // Sent Email

    let config = {
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    };

    let message = {
      from: process.env.EMAIL, // sender address
      to: user.email, // list of receivers
      subject: "OTP", // Subject line
      text: "OTP", // plain text body
      html: `<b>Your Reset OTP :</b> ${OTP}`, // html body
    };

    let transporter = nodemailer.createTransport(config);
    await transporter
      .sendMail(message)
      .then(() => {
        return res.status(201).json({ message: "OTP Sent Check Your Registed Email..", OTP: OTP });
      })
      .catch((err) => {
        console.error("Error During Generate OTP:", err);
      });
  } catch (error) {
    console.error("Error During Generate OTP:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/** POST: http://localhost:8000/api/verifyOTP
 {
    "OTP": "346594"
  }
*/
const verifyOTP = async (req, res) => {
  try {
    const { userName } = req.user;
    console.log(userName);
    const userOtp = await userModel.findOne({ userName });
    const db_OTP = userOtp.OTP;
    const req_OTP = req.body.OTP;

    if (parseInt(db_OTP) === parseInt(req_OTP)) {
      // res.cookie("forgotPass", "", { maxAge: 0 });

      return res.status(200).json({ message: "OTP Verifiyed" });
    }

    return res.status(400).json({ message: "Invalid OTP" });
  } catch (error) {
    console.error("Error During Verify OTP");
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/** POST: http://localhost:8000/api/resetPassword
 @param :{
  "newPassword" : "Chandru23"
  "confirm_pwd" : "Chandru23"
 }
 */
const updatePassword = async (req, res) => {
  try {
    console.log(req.user);
    const { userName } = req.user;
    const { newPassword, confirm_pwd } = req.body;
    if (!userName) {
      return res.status(401).json({ error: "Unauthorized User" });
    }

    // Check All Field
    if (!newPassword || !confirm_pwd) {
      return res.status(400).json({
        error: "All fields are required ",
      });
    } else if (newPassword.includes(" ") || confirm_pwd.includes(" ")) {
      return res.status(400).json({ error: "Enter valid newPassword and confirm_pwd" });
    }

    // Password Match
    if (newPassword === confirm_pwd) {
      const hashpassword = await authHelper.hashedPassword(newPassword);
      const userId = req.user.id;
      console.log(hashpassword);

      const updatedUser = await userModel.findOneAndUpdate(
        { _id: userId },
        { password: hashpassword },
        { new: true } // Return the updated document
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.clearCookie("token");
      res.clearCookie("forgotPass");
      return res.status(201).json({ message: "Password Update Successfull" });
    }

    return res.status(400).json({ message: "Password don't match" });
  } catch (error) {
    console.log("Error During Update Password", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  generateOTP,
  verifyOTP,
  updatePassword,
};
