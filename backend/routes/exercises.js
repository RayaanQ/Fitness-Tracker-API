const express = require('express')
const router = express.Router();
const {getAllExercises,createExercise,getExercise,deleteExercise,updateExercise} = require('../controllers/exercise');

router.route('/').get(getAllExercises);

router.route('/add').post(createExercise);

router.route('/:id').get(getExercise).delete(deleteExercise);

router.route('/update/:id').post(updateExercise);

module.exports = router;