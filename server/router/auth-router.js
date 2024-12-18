const express= require("express");
const router= express.Router();

// const {home, register,service}= require("../controllers/auth-controller")
const authcontroller= require("../controllers/auth-controller")
const signupSchema= require("../validators/auth-validator")
const validate= require("../middlewares/validate-middleware")



router.route("/").get(authcontroller.home);
router.route("/service").get(authcontroller.service);
router.route("/register").post(validate(signupSchema),authcontroller.register);
router.route("/login").post(authcontroller.login);
router.route("/user").get(authcontroller.user);




module.exports= router;