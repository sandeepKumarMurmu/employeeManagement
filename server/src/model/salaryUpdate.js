// importing from library
const mongoose = require("mongoose");

// schema salary
const salary_schema = new mongoose.Schema({
  month: { type: "string" },
  list: [{ type: Object }],
  salaryDone: { type: Number },
});

// model
module.exports = mongoose.model("Salary", salary_schema);
