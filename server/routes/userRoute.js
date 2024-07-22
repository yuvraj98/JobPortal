const express = require("express");
const { login, logout, register, updateProfile } = require("../controllers/userController.js");
const isAuthenticated = require("../auth/isAuthenticated.js");
const { singleUpload } = require("../middleware/multer.js"); // Correctly import singleUpload

const router = express.Router();

router.post("/register",singleUpload, register);
router.post("/login",login);
router.get("/logout",logout);
// router.post("/profile/update",isAuthenticated, singleUpload, updateProfile);

module.exports = router;
