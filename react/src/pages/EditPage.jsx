import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

export const EditExercisePage = ({exerciseToEdit}) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const navigate = useNavigate();

    const editExercise = async () => {
        const edittedExercise = {name, reps, weight, unit, date}
        const response = await fetch(
            `/exercises/${exerciseToEdit._id}`, {
                method:"PUT",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(edittedExercise)
            }
        )
        if(response.status === 200) {
            alert("Successfully editted exercise")
        } else {
            alert("Failed to edit movie, status code = " + response.status)
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
                    <legend>Edit Exercise</legend>
                    <input 
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                    <input 
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.valueAsNumber)}/>
                    <input 
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.valueAsNumber)}/>
                    <select 
                        id="weight-unit" 
                        value={unit} 
                        onChange={e => setUnit(e.target.value)}>
                            <option value="lbs">lbs</option>
                            <option value="kgs">kgs</option>
                    </select>
                    <input 
                        type="text"
                        value={date}
                        onChange={e => setDate(e.target.value)}/>
                </fieldset>
            </form>
            <button onClick={editExercise}>Confirm</button>
        </body>
        <footer>
            <p>© 2024 Wiley Jones</p>
        </footer>
    </>
    )
}

export default EditExercisePage;