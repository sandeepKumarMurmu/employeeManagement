// importing attendence model
const Attendence = require("../../model/attemdenceModel");
const Employee = require("../../model/employee");

// controller function
module.exports = async (req, res) => {
  const { date, list } = req.body;
  try {
    console.log(list);
    let newList = [];
    const employeeList = await Employee.find().lean().exec();

    // employeeList.map(async (ele) => {
    //   if (!list.includes(ele._id)) {
    //     await Employee.findByIdAndUpdate(ele._id, { absent: absent + 1 });
    //     newList.push({ id: ele._id, name: ele.name, present: false });
    //   } else {
    //     newList.push({ id: ele._id, name: ele.name, present: true });
    //   }
    // });

    // await Attendence.create({
    //   date,
    //   list: newList,
    //   present: list.length,
    //   absent: employeeList.length - list.length,
    // });
    return res.status(200).json({
      mesage: "attendence created",
    });
  } catch (e) {
    return res.status(400).json({ error: "erron in attendence controller" });
  }
};
