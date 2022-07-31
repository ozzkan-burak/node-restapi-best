const workoutService = require("../services/workoutServices");

const {
  getAllWorkoutsService,
  getOneWorkoutService,
  createNewWorkoutService,
  updateOneWorkoutService,
  deleteOneWorkoutService,
} = workoutService;

const getAllWorkouts = (req,res) => {

  const allWorkouts = getAllWorkoutsService();
  res.send({ stattus: "OK", data: allWorkouts });
};

const getOneWorkout = (req, res) => {

  const getOneWorkout = getOneWorkoutService();
  res.send("Get an existing workout");
};

const createNewWorkout = (req, res) => {

  const { body } = req;
  
  if(
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips
  };


  const createNewWorkout = createNewWorkoutService(newWorkout);
  res.status(201).send({status: "OK", data: createNewWorkout})
};

const updateOneWorkout = (req, res) => {

  const updateOneWorkout = updateOneWorkoutService();
  res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {

  const deleteOneWorkout = deleteOneWorkoutService();
  res.send("Delete an existing workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};