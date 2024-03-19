const userModel = require("../model/userModel");
const { hashedPassword, comparePassword } = require("../helper/auth");
const jwt = require("jsonwebtoken");

/** POST: http://localhost:8000/api/register 
 * @param : {
  "userName": "Chandru",
  "email":"test@gmail.com",
  "password":"123456",
  "roll":"Admin"
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
      return res
        .status(400)
        .json({ error: "Enter valid username and password" });
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

    const hashpassword = await hashedPassword(password);

    const user = await userModel.create({
      userName,
      password: hashpassword,
      roll,
      email,
    });

    return res
      .status(200)
      .json({ message: "Register successful", userDetails: user });
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
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Incorrect username or password" });
    }
    if (match) {
      const token = jwt.sign(
        {
          id: user._id,
          userName: user.userName,
          roll: user.roll,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1hr" }
      );
      return res
        .status(200)
        .json({ message: "Authentication successful", token });
    }
  } catch (error) {
    console.error("Error During Login");
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
