const { v4: uuid } = require("uuid");

const Workout = require("../database/Workout");

const getAllWorkoutsService = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkoutService = (newWorkout) => {
  const workout = Workout.getOneWorkout(wporkout);
  return workout;
};

const createNewWorkoutService = () => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleStrign("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleStrign("en-US", { timeZone: "UTC" }),
  };

  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkoutService = () => {
  const updateWorkout = Workout.updateOneWorkout(workoutId, changes);
  return updateWorkout;
};

const deleteOneWorkoutService = () => {
  Workout.deleteOneWorkout(workoutId);
};

module.exports = {
  getAllWorkoutsService,
  getOneWorkoutService,
  createNewWorkoutService,
  updateOneWorkoutService,
  deleteOneWorkoutService,
};