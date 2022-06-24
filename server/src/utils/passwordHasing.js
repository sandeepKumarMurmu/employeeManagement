//importing from library

const bcrypt = require("bcryptjs");

// function for hashing password
module.exports = (password) => {
  return bcrypt.hashSync(password, 4);
};
