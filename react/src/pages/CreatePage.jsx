import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

function CreateExercisePage(){
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date}
        const response = await fetch(
            "/exercises", {
                method: "POST",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(newExercise)
            }
        ) 
        if(response.status === 201){
            alert("Successfully added exercise to log")
        } else {
            alert("Failed to add exercise, status code = " + response.status)
        }
        navigate('/')
    }

    return (
        <>
        <header className='app-header'>
            <h1>Exercise Time App</h1>
            <p>Track your progress below by adding or editing your lifts</p>
            <Navigation />
        </header>
        <body className='app-body'>
            <form>
                <fieldset>
                    <legend>Add Exercise</legend>
                    <input 
                        type="text"
                        placeholder="Exercise name"
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                    <input 
                        type="number"
                        value={reps}
                        placeholder="How many?"
                        onChange={e => setReps(e.target.valueAsNumber)}/>
                    <input 
                        type="number"
                        value={weight}
                        placeholder="How much?"
                        onChange={e => setWeight(e.target.valueAsNumber)}/>
                    <select 
                        value={unit} 
                        onChange={e => setUnit(e.target.value)}>
                            <option value="--">--</option>
                            <option value="lbs">lbs</option>
                            <option value="kgs">kgs</option>
                    </select>
                    <input 
                        type="text"
                        placeholder="mm-dd-yy"
                        value={date}
                        onChange={e => setDate(e.target.value)}/>
                </fieldset>
            </form>
            <button onClick={addExercise}>Confirm</button>
        </body>
        <footer>
            <p>© 2024 Wiley Jones</p>
        </footer>
    </>
    )
}

export default CreateExercisePage