const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const db = "./db.json";

let studentData = [];
const readJsonFile = () => {
  fs.readFile(db, "utf-8", (err, jsonString) => {
    if (err) {
      console.log(err);
    }
    try {
      studentData = JSON.parse(jsonString);
      console.log("successful");
    } catch (err) {
      console.log("error", err);
      studentData = [];
    }
  });
};
const writeJsonFile = (studentData) => {
  fs.writeFile(db, JSON.stringify(studentData, null, 2), (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
};

const deleteUser =
  ("/:id",
  (req, res) => {
    const { id } = req.params;
    res.send(req.params);
    studentData = studentData.filter((data) => data.id != id);
    res.send("user with the ${id} is deleted");
  });

const addStudents = (req, res, next) => {
  const student = req.body;
  studentData.push({ ...student, id: uuidv4() });
  writeJsonFile(studentData);
  res.send("user added");
};

const updateStudent = (req, res, next) => {
  const { id } = req.params;
  const user = studentData.find((student) => student.id === id);
  const { name, dob, score, roll } = req.body;

  if (name) user.name = name;

  if (roll) user.roll = roll;

  if (score) user.score = score;

  if (dob) user.dob = dob;

  res.send("updated");
};

const getStudentById = (req, res, next) => {
  const { id } = req.params;
  const foundUser = studentData.find((student) => student.id === id);
  res.send(foundUser);
};
const getStudents = (req, res, next) => {
  res.send(studentData);
};

module.exports = {
  updateStudent: updateStudent,
  getStudentById: getStudentById,
  readJsonFile: readJsonFile,
  deleteUser: deleteUser,
  addStudents: addStudents,
  getStudents: getStudents,
};
