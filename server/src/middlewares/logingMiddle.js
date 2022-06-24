// importing model
const Employee = require("../model/employee");

//importing password validator
const ValidatePassword = require("../utils/validatePassword");

// middleware function for validating password and username
module.exports = async (req, res, next) => {
  const { userName, password } = req.body;
  try {
    let user = await Employee.findOne({ userName }).lean().exec();
    if (!user)
      return res
        .status(400)
        .json({ message: "user name or password is wrong", status: false });

    console.log(ValidatePassword(password, user.password));
    if (!ValidatePassword(password, user.password))
      return res
        .status(400)
        .json({ message: "user name or password is wrong", status: false });
    next();
  } catch (e) {
    return res.status(400).json({ message: "error in middle" });
  }
};
