require("../controllers/userController");
require("../controllers/userController");
var express = require("express");
const {
  deleteUser,
  addStudents,
  getStudents,
  readJsonFile,
  getStudentById,
  updateStudent
} = require("../controllers/userController");

var router = express.Router();
readJsonFile();

/* GET users listing. */

router.post("/add", addStudents);
router.delete("/:id", deleteUser);
router.get("/", getStudents);
router.get('/:id',getStudentById);
router.patch('/:id',updateStudent);

module.exports = router;
