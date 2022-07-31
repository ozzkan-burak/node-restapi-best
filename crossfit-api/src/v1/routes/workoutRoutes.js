const express = require("express");
const router = exress.Router();

router.get("/",  (req, res) => {
  res.send("Get all works");
});

router.get("/:workoutId",(req, res) => {
  res.send("Get an existing workout");
});

router.post("/",(req, res)=> {
  res.send("Create new workout");
});

router.patch("", (req, res) => {
  res.send("Update an existing workout");
});

router.delete("/:workoutId", (req, res) => {
  res.send("Delete an existing workout");
});

module.exports = router