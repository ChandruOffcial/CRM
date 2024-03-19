const bcrypt = require("bcrypt");

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

module.exports = {
  hashedPassword,
  comparePassword,
};
