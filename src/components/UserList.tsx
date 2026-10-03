import type {User} from "../types/User"
import { UserCard } from "./UserCard"

interface UserListProps {
    users: User[]
}

export function UserList({users}: UserListProps){

    return(
        <div>
            {
                users.map(user => (
                    <UserCard key={user.id} user={user} ></UserCard>
                ))
            }
        </div>
    )
}