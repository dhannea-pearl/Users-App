import { Link } from "react-router-dom";
import type { User } from "../types/User";

interface UserCardProps{
    user: User
}

export function UserCard({ user }: UserCardProps) {
    return(
        <Link to={`/users/${user.id}`} className="card">
            <h3>{user.profile.name}</h3> // nested types
            <p>@{user.username}</p>
            <p>@{user.profile.email}</p>
            <p>@{user.profile.addres.city}</p>
            <p>@{user.role.join(", ")}</p>
        </Link>
    )
}