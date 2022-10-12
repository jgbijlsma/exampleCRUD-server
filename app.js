const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server started"));

app.use(cors());
app.use(express.json());

app.use("/teachers", require("./routes/teacherRouter"));
