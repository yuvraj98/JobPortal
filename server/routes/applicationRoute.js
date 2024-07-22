const express = require("express");
const { applyJob, getApplicants, getAppliedJobs, updateStatus } = require("../controllers/applicationController.js");
const { isAuthenticated } =  require("../auth/isAuthenticated.js");
const router = express.Router();

router.get("/apply/:id",isAuthenticated, applyJob);
router.get("/get",isAuthenticated, getAppliedJobs);
router.get("/:id/applicants",isAuthenticated, getApplicants);
router.post("/status/:id/update",isAuthenticated, updateStatus);

module.exports = router;