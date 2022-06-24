// importing employe model
const Employee = require("../../model/employee");

// controller function
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await Employee.findById(id).lean().exec();
    console.log(id);

    return res.status(200).json({ status: true, data });
  } catch (e) {
    return res.status(400).json({ e, message: "error ins single controller" });
  }
};
