const Workout = require("../database/Workout");

const getAllWorkoutsService = (req, res) => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkoutService = (req, res) => {
  return;
};

const createNewWorkoutService = (req, res) => {
  return;
};

const updateOneWorkoutService = () => {
  return;
};

const deleteOneWorkoutService = () => {
  return;
};

module.exports = {
  getAllWorkoutsService,
  getOneWorkoutService,
  createNewWorkoutService,
  updateOneWorkoutService,
  deleteOneWorkoutService,
};