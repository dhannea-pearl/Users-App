import { NavLink } from "react-router-dom";

export function Navbar() {
    return(
        <nav>
            <NavLink to="/" end>
                Users
            </NavLink>
        </nav>
    )
}