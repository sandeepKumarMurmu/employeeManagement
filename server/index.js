//importing from library
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// importing routrs
const employee_route = require("./src/routes/employee_route");
const login_route = require("./src/routes/login_route");
const attendence_route = require("./src/routes/attendence_route");

//initializing app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// api middleware
app.use("/", employee_route);
app.use("/", login_route);
app.use("/", attendence_route);

// declearing port
const PORT = process.env.PORT || 8080;
const password = process.env.URI_PASS;
const userName = process.env.URI_KEY;

// url to data base
const url = `mongodb+srv://${userName}:${password}@cluster0.t8llmza.mongodb.net/?retryWrites=true&w=majority`;

// listinig app
mongoose.connect(url, () => {
  app.listen(PORT, async () => {
    try {
      console.log(`listning on port ${PORT} .....`);
    } catch (e) {
      console.log(e);
    }
  });
});
