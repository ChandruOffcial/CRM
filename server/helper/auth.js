const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
/** Hashed Password */
const hashedPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        reject(err);
      } else {
        bcrypt.hash(password, salt, function (err, hash) {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      }
    });
  });
};

/** Compare Password */
const comparePassword = (password, hashedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result); // Returns true if passwords match, false otherwise
      }
    });
  });
};

/** Token Generate */
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      userName: user.userName,
      roll: user.roll,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1hr" }
  );
};

module.exports = {
  hashedPassword,
  comparePassword,
  generateToken,
};
