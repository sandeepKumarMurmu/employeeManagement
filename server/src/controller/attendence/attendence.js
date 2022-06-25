// importing attendence model
const attendence = require("../../model/attemdenceModel");
const Employee = require("../../model/employee");

// controller function
module.exports = async (req, res) => {
  const { list, date } = req.body;
  console.log(list);
  try {
    const arr = [];

    const data = await Employee.find().lean().exec();

    data.map(async (ele) => {
      if (list.includes(ele._id.toString())) {
        arr.push({ id: ele._id.toString(), name: ele.name, present: true });
      } else {
        let abs = ele.absent;
        await Employee.findByIdAndUpdate(ele._id.toString(), {
          absent: abs + 2,
        })
          .lean()
          .exec(() => {
            arr.push({
              id: ele._id.toString(),
              name: ele.name,
              present: false,
            });
          });
      }
    });

    for (var i = 0; i < data.length; i++) {
      if (!list.includes(data[i]._id.toString())) {
        arr.push({
          id: data[i]._id.toString(),
          name: data[i].name,
          present: false,
        });
      }
    }

    await attendence.create({
      date,
      list: arr,
      present: list.length,
      absent: data.length - list.length,
    });
    return res.status(200).json({ message: "created" });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "erron in attendence controller" });
  }
};
