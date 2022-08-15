const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts
};

const createNewWorkout = (newWorkout) => {
  const isAllreadyAdded = 
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;

  if (isAllreadyAdded) {
    throw {
      status: 400,
      message: `Workout with the name '${newWorkout.name}' already exist`,
    };
  }

  try {
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;  
  } catch (error) {
    throw {status: 500, message: error?.message || error };
  }
 
}

const updateOneWorkout = (workoutId, changes) => {
  const indexForUpdate = DB .workouts.findIndex((workout) => workout.id === workoutId);
  if(indexForUpdate === -1) {
    return;
  }
  const updateWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updateAt: new Date().toıLocale("en-US", {timeZone: "UTC"});
  };
  DB.workouts[indexForUpdate] = updateWorkout;
  saveToDatabase(DB);
  return updateWorkout;
}

const deleteOneworkout = (workoutId) => {
  const indexForDeletion = DB.workouts.findIndex(
    (workout) => workout.id === workoutId);

    if(indexForDeletion === -1) {
      return;
    }

    DB.workouts.spilice(indexForDeletion, 1);
    saveToDatabase(DB);
}
 
module.exports = { getAllWorkouts, createNewWorkout };
