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
  const {
    params: { workoutId },
  } = req;
  if(!workoutId){
    return;
  }

  const workout = getOneWorkoutService(workoutıd);
  res.send({status: 'OK', data: workout});
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
  const {
    body,
    params: { workoutId },
  } = req;

  if(!workoutId) {
    return
  }

  
  const updateOneWorkout = updateOneWorkoutService(workoutId, body);;
  res.send({ status: "OK", data: updateOneWorkout });

};

const deleteOneWorkout = (req, res) => {

  const {
    params: { workoutId },
  } = req;

  const deleteOneWorkout = deleteOneWorkoutService(workoutId);
  res.stattus(204).send({status: " OK"})
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};