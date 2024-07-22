const express = require("express");
const { isAuthenticated } =  require("../auth/isAuthenticated.js");
const { getAllJobs, getJobById, getJobByLoggedAdminUser, postJob }  = require("../controllers/jobController.js");

 
const router = express.Router();

router.post("/postjob",isAuthenticated , postJob);
router.get("/all", isAuthenticated , getAllJobs);
router.get("/getadminjobs",isAuthenticated, getJobByLoggedAdminUser);
router.get("/:id",isAuthenticated, getJobById);


module.exports = router;