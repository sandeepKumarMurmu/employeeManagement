// importing from library

const employee = require("../../model/employee");

module.exports = async (req, res) => {
  try {
    const { _id } = await employee
      .findOne({ userName: req.body.userName })
      .lean()
      .exec();
    return res
      .status(200)
      .json({ message: "attendence marked", status: true, _id });
  } catch (e) {
    return res.status(400).json({ message: "error in controller" });
  }
};
