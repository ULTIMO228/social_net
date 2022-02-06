import "./Nav.css"
import {Link} from "react-router-dom";
export default function Nav() {
    return(
    <nav className="Nav">
        <Link className="Nav-said_i" to="/profile">Profile</Link>
        <Link className="Nav-said_i" to="/messages">Messages</Link>
        <Link className="Nav-said_i" to="/users">Users</Link>

    </nav>
    )
}