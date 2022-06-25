// importing attendence model
const Employee = require("../../model/employee");
const attendence = require("../../model/attemdenceModel");

// constroller function
module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    // console.log(id);
    const data = await attendence.findById(id).lean().exec();
    return res.status(200).json({ data, status: true });
  } catch (e) {
    return res.status(400).json({ message: "error in get attendence" });
  }
};
