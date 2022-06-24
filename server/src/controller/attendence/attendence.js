// importing attendence model

const Employee = require("../../model/employee");

// controller function
module.exports = async (req, res) => {
  try {
    console.log("check");
    const data = await Employee.findOne({ userName: "@bandri_bandri" })
      .lean()
      .exec();
    console.log(data);
    return res.status(200).json({ message: "connected" });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "erron in attendence controller" });
  }
};
