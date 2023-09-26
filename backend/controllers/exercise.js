let Exercise = require('../models/exercise');

const getAllExercises = async(req, res) => {
    try {
        const exercises = await Exercise.find();
        res.status(200).json(exercises);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
}

const createExercise = async(req,res)=>{
    try {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
  
    const newExercise = new Exercise({
      username,
      description,
      duration,
      date,
    });
    newExercise.save();
    res.status(201).json('Exercise added!!');
    } catch (error) {
        res.status(400).json('Error: ' + error)
    }
}

const getExercise = async (req,res) =>{
    try {
        const exercise = await Exercise.findById(req.params.id);
        res.status(200).json(exercise);
    } catch (error) {
        res.status(400).json('Error: ' + error)
    }
}

const deleteExercise = async (req,res) =>{
    try {   
        const exercise = await Exercise.findByIdAndDelete(req.params.id);
        res.status(200).json('Exercise deleted.');
    } catch (error) {
        res.status(400).json('Error: ' + error)
    }
}

const updateExercise = async (req,res) =>{
    try {
        const exercise = await Exercise.findById(req.params.id);
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);
        exercise.save();
        res.status(200).json('Exercise Updated!!');
    } catch (error) {
        res.status(400).json('Error: ' + error)
    }
}



module.exports = {getAllExercises,createExercise,getExercise,deleteExercise,updateExercise};
