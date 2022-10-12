const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const db = "./db.json";

let Data = {};

const readJsonFile = () => {
  fs.readFile(db, "utf-8", (err, jsonString) => {
    if (err) {
      console.log(err);
    }
    try {
      Data = JSON.parse(jsonString);
      console.log("successful");
      console.log(Data);
    } catch (err) {
      console.log("error", err);
      Data = [];
    }
  });
};
const writeJsonFile = (Data) => {
  fs.writeFile(db, JSON.stringify(Data, null, 2), (err) => {
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
    Data = Data.students.filter((data) => data.id != id);
    res.send("user with the ${id} is deleted");
  });

const addStudents = (req, res, next) => {
  const student = req.body;
  Data.students.push({ ...student, id: uuidv4() });
  writeJsonFile(Data.students);
  res.send("user added");
};

const addTeacher = (req, res) => {
  console.log(JSON.stringify(req.body));
  const {username,password} = req.body
  Data.teachers.push({username,password});
  writeJsonFile(Data);
  res.send(`${username} added`);
};
const updateStudent = (req, res, next) => {
  const { id } = req.params;
  const user = Data.students.find((student) => student.id === id);
  const { name, dob, score, roll } = req.body;

  if (name) user.name = name;

  if (roll) user.roll = roll;

  if (score) user.score = score;

  if (dob) user.dob = dob;

  res.send("updated");
};

const getStudentById = (req, res, next) => {
  const { id } = req.params;
  const foundUser = Data.students.find((student) => student.id === id);
  res.send(foundUser);
};
const getStudents = (req, res, next) => {
  res.send(Data.students);
  console.log(Data.students);
};

const getTeacherDetails = (req, res, next) => {
  res.send(Data.teachers);
  console.log(">>>",Data.teachers);
};
const getRecord=(req,res,next)=>{
  
}

module.exports = {
  addTeacher: addTeacher,
  getTeacherDetails: getTeacherDetails,
  updateStudent: updateStudent,
  getStudentById: getStudentById,
  readJsonFile: readJsonFile,
  deleteUser: deleteUser,
  addStudents: addStudents,
  getStudents: getStudents,
};
