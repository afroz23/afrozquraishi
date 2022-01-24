const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/download", (req, res) => {
  res.download("./resume.pdf");
});

app.listen(PORT, () => {
  console.log("server is running..");
});
