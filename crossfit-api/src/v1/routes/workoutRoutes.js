const express = require("express");
const router = express.Router();

const workoutController = require("../../controllers/workoutControllers");

const {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
} = workoutController;


router.get("/", getAllWorkouts);

router.get("/:workoutId", getOneWorkout);

router.post("/", createNewWorkout);

router.patch("", updateOneWorkout);

router.delete("/:workoutId", deleteOneWorkout);

module.exports = router