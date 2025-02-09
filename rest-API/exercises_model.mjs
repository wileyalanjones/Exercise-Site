import mongoose from 'mongoose';
import 'dotenv/config';

const EXERCISES_DB_NAME = 'exercises_db';
const EXERCISES_COLLECTION = 'exercises';
const EXERCISE_CLASS = 'Exercise'

let connection = undefined;
let Exercise = undefined;


async function connect(dropCollection){
    try{
        connection = await createConnection();
        console.log("Successfully connected to MongoDB using Mongoose!");
        if(dropCollection){
            await connection.db.dropCollection(EXERCISES_COLLECTION);
        }
        Exercise = createModel();
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

async function createConnection(){
    await mongoose.connect(process.env.MONGODB_CONNECT_STRING, 
                {dbName: EXERCISES_DB_NAME});
    return mongoose.connection;
}


function createModel(){
    // Define the Schema
    const exercisesSchema = mongoose.Schema({
        name: {type: String, required: true},
        reps: {type: Number, required: true},
        weight: {type: Number, required: true},
        unit: {type: String, required: true},
        date: {type: String, required: true}
    });
    // Compile the model class from the schema
    // This should after defining the schema
    return mongoose.model(EXERCISE_CLASS, exercisesSchema);
}


async function createExercise(name, reps, weight, unit, date){
    const movie = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date})
    return movie.save();
}

async function findExercises(filter) {
    const query = Exercise.find(filter);
    return query.exec()
}

async function findExerciseById(_id){
    const exerciseId = Exercise.findById(_id);
    return exerciseId.exec()
}

async function updateExercise(_id, updates){
    const updatedExercise = Exercise.findByIdAndUpdate(_id, updates)
    return updatedExercise.exec()
}

async function deleteExerciseById(_id){
    const result = await Exercise.deleteOne({_id: _id})
    return result.deletedCount;
}

export { connect, createExercise, findExercises, findExerciseById, updateExercise, deleteExerciseById };