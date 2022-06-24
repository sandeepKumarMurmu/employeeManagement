// importing models
const Salary = require("../../model/salaryUpdate");
const Employee = require("../../model/employee");

//constroller
module.exports = async (req, res) => {
  try {
    const { month, list } = req.body;
    const arr = [];

    const data = await Employee.find().lean().exec();

    data.map(async (ele) => {
      if (list.includes(ele._id.toString())) {
        arr.push({ id: ele._id.toString(), name: ele.name, salary: true });
      }
    });

    for (var i = 0; i < data.length; i++) {
      if (!list.includes(data[i]._id.toString())) {
        arr.push({
          id: data[i]._id.toString(),
          name: data[i].name,
          salary: false,
        });
      }
    }

  await Salary.create({
      month,
      list: arr,
      salaryDone: list.length,
    });
  } catch (e) {
    return res.status(400).json({ e, message: "error in salary controller" });
  }
};
