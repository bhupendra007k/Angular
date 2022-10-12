require("../controllers/userController");
var express = require("express");
const {
  deleteUser,
  addStudents,
  getStudents,
  readJsonFile,
  getStudentById,
  updateStudent,
  getTeacherDetails,
  addTeacher,
} = require("../controllers/userController");

var router = express.Router();
readJsonFile();

/* GET users listing. */

// router.post("/add", addStudents);
// router.delete("/:id", deleteUser);
// router.get("/", getStudents);
// router.get('/:id',getStudentById);
// router.patch('/:id',updateStudent);
// router.post("/addTeacher",addTeacher);
// router.get("/teach",getTeacherDetails);
router.get("/students", getStudents);

router.get("/teachers", getTeacherDetails);

router.get("/student/:id", getStudentById);

router.delete("/student/:id", deleteUser);

router.patch("/student/:id", updateStudent);

router.post("", addStudents);

router.post("/teacher/add", addTeacher);

module.exports = router;
