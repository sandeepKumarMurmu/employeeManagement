// importing controller
const salary_controller = require("../controller/newEmployee/salaryUpdate");

// inpmorting from library
const { Router } = require("express");

// initializing router
const router = Router();

router.post("/salary", salary_controller);

// exporting router
module.exports = router;
