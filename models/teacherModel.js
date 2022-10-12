const fs = require("fs");
const path = require("path");

function create(teacher) {
  const teachers = findAll();
  teacher.id = getNextID();
  teachers.push(teacher);
  write(teachers);
}

function findAll() {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, "../docenten.json")).toString()
  );
}

function remove(id) {
  const teachers = findAll();
  const foundTeacher = teachers.find((teacher) => {
    return Number(teacher.id) === Number(id);
  });
  const index = teachers.indexOf(foundTeacher);
  teachers.splice(index, 1);
  write(teachers);
}

module.exports = {
  create,
  findAll,
  remove,
};

function write(data) {
  fs.writeFileSync(
    path.join(__dirname, "../docenten.json"),
    JSON.stringify(data)
  );
}

function getNextID() {
  const teachers = findAll();
  let id = 0;
  teachers.forEach((teacher) => {
    if (teacher.id > id) id = teacher.id;
  });
  id++;
  return id;
}
