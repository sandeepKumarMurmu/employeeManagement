// importing from library
const mongoose = require("mongoose");

// creating employee Scheam
const employee_Schema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 3 },
  userName: { type: String, required: true, minLength: 3, unique: true },
  password: { type: String, required: true },
  payScale: { type: Number, required: true },
  branch: { type: String, required: true },
  admin: { trype: Boolean },
  admin_key: { type: String },
  profile_image: { type: String, required: true },
  address: { type: String, required: true },
  leaves: { type: Number, required: true, default: 4 },
  absent: { type: Number, required: true, default: 0 },
});

// model employee
module.exports = mongoose.model("Employee", employee_Schema);
