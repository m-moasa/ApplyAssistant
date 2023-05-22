const express = require("express");
const router = express.Router();
const {getProjects,getProjectsByField,createProject,updateProject,deleteProject} = require('../controllers/projectController');

// router.route("/").get(getProjects).post(createProject);
router.route("/").get(getProjectsByField).post(createProject);

router.route("/:id").put(updateProject).delete(deleteProject);

module.exports = router;