import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import ExerciseTable from '../components/ExerciseTable';
import Navigation from '../components/Navigation';

function HomePage({setExerciseToEdit}){
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();

    const loadExercises = async () => {
        const response = await fetch('/exercises')
        const data = await response.json();
        setExercises(data)
    }

    useEffect( () => {
        loadExercises();
    }, [])

    const onDelete = async (_id) => {
        const response = await fetch(
            `/exercises/${_id}`, 
            {method: "DELETE"}
        )
        if(response.status === 204) {
            setExercises(exercises.filter((exercise) => exercise._id !== _id))
        }
        else {
            alert(`Failed to delete movie with _id = ${_id}, state code = ${response.status}`)
        }
    }

    const onEdit = async (exercise) => {
        setExerciseToEdit(exercise)
        navigate('/edit-exercise')
    }

    return (
        <>
            <header className='app-header'>
                <h1>Exercise Time App</h1>
                <p>Track your progress below by adding or editing your lifts</p>
                <Navigation />
            </header>
            <body className='app-body'>
                <ExerciseTable exercises={exercises} onDelete={onDelete} onEdit={onEdit}/>
            </body>
            <footer>
                <p>© 2024 Wiley Jones</p>
            </footer>
        </>
    )
}

export default HomePage;

