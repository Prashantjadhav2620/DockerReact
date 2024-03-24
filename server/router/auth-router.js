const express = require("express");
const router = express();
const cors = require("cors");
const  authController = require("../controllers/auth-controller");

router.use(cors());

router.route("/").get(authController.home);

router.route("/register").post(authController.register);

router.route("/login").post(authController.login);

module.exports = router;