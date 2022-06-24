// importing attendence model

const employee = require("../../model/employee");

// controller function
module.exports = async (req, res) => {
  try {
    console.log("check");
    const data = await employee.find({}).lean().exec();
    console.log(data);
    return res.status(200).json({ message: "connected" });
  } catch (e) {
    return res.status(400).json({ error: "erron in attendence controller" });
  }
};
