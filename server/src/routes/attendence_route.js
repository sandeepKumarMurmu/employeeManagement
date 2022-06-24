// importing controller
const attendence_controller = require("../controller/attendence/attendence_controller");

// inpmorting from library
const { Router } = require("express");

// initializing router
const router = Router();

router.post("/attendence", attendence_controller);

// exporting router
module.exports = router;
