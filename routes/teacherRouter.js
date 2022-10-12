const router = require("express").Router();
const Teacher = require("../models/teacherModel");

router.get("/", (req, res) => {
  const teachers = Teacher.findAll();
  res.send(teachers);
});

router.post("/", (req, res) => {
  const { firstName, lastName, age } = req.body;
  const data = {
    voornaam: firstName,
    achternaam: lastName,
    leeftijd: age,
  };
  Teacher.create(data);
  res.end();
});

router.delete("/:id", (req, res) => {
  Teacher.remove(req.params.id);
  res.end();
});

module.exports = router;
