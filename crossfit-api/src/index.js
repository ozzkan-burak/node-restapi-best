const express = require("express");

const app = express();
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const PORT = process.env.PORT || 5000;

// middleware
app.use("/api/v1/workouts", v1WorkoutRouter);


app.listen(PORT, ()=> {
  console.log(`API is listening on port ${PORT}`);
});