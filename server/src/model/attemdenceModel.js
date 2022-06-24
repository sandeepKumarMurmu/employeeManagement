// importing from library
const mongoose = require("mongoose");

// creating employee Scheam
const attendence_Schema = new mongoose.Schema({
  date: { type: String, required: true },
  list: [{ type: Object }],

  present: { type: Number, required: true },
  absent: { type: Number, required: true },
});

// model employee
module.exports = mongoose.model("Attendecne", attendence_Schema);
