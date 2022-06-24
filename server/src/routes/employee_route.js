// importing from library
const { Router } = require("express");
const { body } = require("express-validator");

// importing controllers
const newEmployeeController = require("../controller/newEmployee/createNewEmployeeController");
const singleController = require("../controller/newEmployee/singleEmploye");

// importing employee middleware
const employeeMiddle = require("../middlewares/newEmployeeMiddle");

// initialling  router
const router = Router();

//routes
router.post(
  "/newemployee",
  body("firstName")
    .isAlpha()
    .isLength({ min: 3 })
    .withMessage("First name must be of 3 letter"),
  body("lastName")
    .isLength({ min: 3 })
    .withMessage("Last name must be of 3 letter"),
  employeeMiddle,
  newEmployeeController
);

router.get("/single/:id", singleController);

// exporting router
module.exports = router;
