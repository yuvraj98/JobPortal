const express = require("express");
const { getCompany, getCompanyById, registerCompany, updateCompanyInformation } = require("../controllers/comanyController.js");
const {isAuthenticated} =  require("../auth/isAuthenticated.js");
const {singleUpload}  =  require("../middleware/multer.js");

const router = express.Router();

router.post("/register",isAuthenticated ,registerCompany);
router.get("/getcompany",isAuthenticated ,getCompany);
router.get("/getcompany/:id",isAuthenticated ,getCompanyById);
router.put("/update/:id", isAuthenticated,singleUpload, updateCompanyInformation);

module.exports = router;