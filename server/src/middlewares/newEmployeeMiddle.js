// importing from library
const { validationResult } = require("express-validator");

// importing employee model
const Employee = require("../model/employee");

// employee middle
module.exports = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(400)
        .json({ status: false, message: errors.errors[0].msg });

    let oldEmployee = await Employee.findOne({
      userName: "@" + req.body.firstName + "_" + req.body.lastName,
    })
      .lean()
      .exec();

    if (oldEmployee)
      return res
        .status(400)
        .json({ status: false, message: "User Already Exist" });
    next();
  } catch (e) {
    return res.status(400).json({ message: "error in employee middle" });
  }
};
