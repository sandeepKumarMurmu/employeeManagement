// importing from library
const generator = require("generate-password");

//importing model
const Employee = require("../../model/employee");

// importing hashing password function
const HashingPassword = require("../../utils/passwordHasing");

//employee controller
module.exports = async (req, res) => {
  let uniqueId;
  try {
    const password =
      req.body.firstName +
      "_" +
      generator.generate({ length: 4, numbers: true });
    const state = req.body.admin == "true" ? true : false;
    if (state) {
      uniqueId =
        "admin" +
        "_" +
        req.body.firstName +
        "_" +
        generator.generate({ length: 4, numbers: true });
    }

    const hashPassword = HashingPassword(password);
    const hasedUniqueId = state ? HashingPassword(uniqueId) : "null";

    await Employee.create({
      name: req.body.firstName + " " + req.body.lastName,
      userName: "@" + req.body.firstName + "_" + req.body.lastName,
      password: hashPassword,
      payScale: req.body.payScale,
      branch: req.body.branch,
      admin: req.body.admin,
      admin_key: hasedUniqueId,
      profile_image: req.body.profile_image,
      address: req.body.city + ", " + req.body.state + ", " + req.body.zipcode,
      leaves: 4,
      absent: 0,
    });

    let data = {};
    if (state) {
      data = {
        userName: "@" + req.body.firstName + "_" + req.body.lastName,
        password,
        uniqueId,
      };
    } else {
      data = {
        userName: "@" + req.body.firstName + "_" + req.body.lastName,
        password,
      };
    }

    return res
      .status(200)
      .json({ data, status: true, message: "employe created" });
  } catch (e) {
    return res
      .status(400)
      .json({ status: false, message: "error in employee controller" });
  }
};
