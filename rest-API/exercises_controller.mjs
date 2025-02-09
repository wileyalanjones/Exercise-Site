import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as exercisesModel from './exercises_model.mjs'

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const ERROR_NOT_FOUND = {Error: 'Not found'}
const ERROR_INVALID_REQUEST = {Error: 'Invalid request'}

app.listen(PORT, async ()=>{
    await exercisesModel.connect(false)
    console.log(`Server listening on port: ${PORT}`)
})


app.post('/exercises', asyncHandler(async (req, res) => {
    const set = {
        name: req.body.name,
        reps: req.body.reps,
        weight: req.body.weight,
        unit: req.body.unit,
        date: req.body.date
    }

    const isDateValid = (date) => /^\d\d-\d\d-\d\d$/.test(date)

    if (!set.name || !set.reps || !set.weight || !set.unit || !set.date 
        || typeof(set.name) !== "string" || set.name.length < 1 
        || !Number.isInteger(set.reps) || set.reps < 1 
        || !Number.isInteger(set.weight) || set.weight < 1 
        || !(set.unit === "kgs" || set.unit === "lbs") 
        || !isDateValid(set.date)){
        res.status(400).json(ERROR_INVALID_REQUEST)
    }

    else {
        const exercise = await exercisesModel.createExercise(set.name, set.reps, set.weight, set.unit, set.date);
        res.status(201).json(exercise)
    }

}));


app.get('/exercises', asyncHandler(async (req, res) => {
    const exercises = await exercisesModel.findExercises();
    res.json(exercises);
}));


app.get('/exercises/:exercise_id', asyncHandler( async(req, res) => {
    const id = req.params.exercise_id
    const exercise = await exercisesModel.findExerciseById(id);
    exercise ? res.json(exercise) : res.status(404).json(ERROR_NOT_FOUND)
}));

app.put('/exercises/:exercise_id', asyncHandler( async (req, res) => {
    const id = req.params.exercise_id;
    const set = {
        name: req.body.name,
        reps: req.body.reps,
        weight: req.body.weight,
        unit: req.body.unit,
        date: req.body.date
    }

    const isDateValid = (date) => /^\d\d-\d\d-\d\d$/.test(date)

    if (!set.name || !set.reps || !set.weight || !set.unit || !set.date 
        || typeof(set.name) !== "string" || set.name.length < 1 
        || !Number.isInteger(set.reps) || set.reps < 1 
        || !Number.isInteger(set.weight) || set.weight < 1 
        || !(set.unit === "kgs" || set.unit === "lbs") 
        || !isDateValid(set.date)){
        res.status(400).json(ERROR_INVALID_REQUEST)
    }

    else {
        const updatedExercise = await exercisesModel.updateExercise(id, set)
        updatedExercise ? res.json(await exercisesModel.findExerciseById(id)) : res.status(404).json(ERROR_NOT_FOUND)
    }
    
}));

app.delete('/exercises/:exercise_id', asyncHandler(async (req, res) => {
    const id = req.params.exercise_id;
    const deleteExercise = await exercisesModel.deleteExerciseById(id);
    deleteExercise ? res.status(204).send() : res.status(404).json(ERROR_NOT_FOUND)    
}));


