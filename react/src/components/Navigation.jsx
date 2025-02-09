import { Link} from "react-router-dom";

function Navigation() {
    return (
        <nav className="app=nav">
            <Link to="/" className='home-link'>Home</Link>{" "}
            <Link to="/create-exercise" className='create-link'>Create</Link>
        </nav>
    )
}

export default Navigation;