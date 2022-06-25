// importing controller
const attendence_controller = require("../controller/attendence/attendence");
const get_controller = require("../controller/attendence/getattendence");
const getall_controller = require("../controller/attendence/getAll");

// inpmorting from library
const { Router } = require("express");

// initializing router
const router = Router();

router.post("/attendence", attendence_controller);
router.get("/attendence/getAll", getall_controller);
router.get("/attendence/:id", get_controller);

// exporting router
module.exports = router;
