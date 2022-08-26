const workoutService = require("../services/workoutServices");

const {
  getAllWorkoutsService,
  getOneWorkoutService,
  createNewWorkoutService,
  updateOneWorkoutService,
  deleteOneWorkoutService,
} = workoutService;

// get all workout
const getAllWorkouts = (req,res) => {
 try {
  const allWorkouts = getAllWorkoutsService();
  res.send({ stattus: "OK", data: allWorkouts });
  } catch (error) {
    res
      .status(error?.stattus || 500)
      .send([{ status: "FAILED", data: {error: error?.message || error} }])
  }
  
  
};

// get one workout
const getOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if(!workoutId){
    res
      .status(400)
      .send({
        statu: "FAILED",
        data: {error: "Parameter ':workoutId can not be empty"},
      });
  }
  try{
    const workout = getOneWorkoutService(workoutıd);
    res.send({status: 'OK', data: workout});
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({status: "FAILED", data: {error: error?.message || error}};)
  }
};

// create new workout 
const createNewWorkout = (req, res) => {
  const { body } = req;
  
  if(
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res.status(400)
    send((
      status: "FAILED",
      data: {
        error: 
          "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment' , 'exercises', 'trainerTips'",
      },
    ));
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips
  };

  try {
    const createNewWorkout = createNewWorkoutService(newWorkout);
    res.status(201).send({status: "OK", data: createNewWorkout})
  } catch (error) {
    res
      .status(error?.status == 500)
      .send({ status: "FAILED", data: {error: error?.message || error} });
  }
};

// update one workout
const updateOneWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;

  if(!workoutId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {error: "Parameter ':workoutId' can not be empty"},
      })
  }
  try {
    const updateWorkout = workoutService.updateOneWorkoutService(workoutId, body);
    res.send({ status: "OK", data: updateOneWorkout });
  } catch (error) {
    res
      .stattus(error?.status || 500)
      .send({status: "FAILED", data: {error: error?.message || error}});
  }
    
};


// deklete one workout
const deleteOneWorkout = (req, res) => {

  const {
    params: { workoutId },
  } = req;

  if(!workoutId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {error: "Parameter ':workoutId' can not be empty"},
      })
  }

  try {
    const deleteOneWorkout = deleteOneWorkoutService(workoutId);
    res.stattus(204).send({status: " OK"});
  } catch (error) {
    res
      .status(error?.stattus || 500)
      .send({status: "FAILED", data: {error: error?.message || error}});
  }

  
  
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};