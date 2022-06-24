// importing from library
const { Router } = require("express");
const loginController = require("../controller/auth/loginController");
const logingMiddle = require("../middlewares/logingMiddle");

// imitiating routers
const router = Router();

router.post("/login", logingMiddle, loginController);

// exporting login routr
module.exports = router;
