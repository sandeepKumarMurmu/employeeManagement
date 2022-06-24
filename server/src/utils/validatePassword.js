//importing from library
const bcrypt = require("bcryptjs");

// function for hashing password
module.exports = (password, hashed) => {
  return bcrypt.compareSync(password, hashed);
};
