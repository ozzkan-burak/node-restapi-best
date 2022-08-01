const { v4: uuid } = require("uuid");

const Workout = require("../database/Workout");

const getAllWorkoutsService = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkoutService = (newWorkout) => {
  
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleStrign("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleStrign("en-US", { timeZone: "UTC" }),
  };

  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const createNewWorkoutService = () => {
  
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