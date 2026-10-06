import type {User} from "../types/User"
import { UserCard } from "./UserCard"

interface UserListProps {
    users: User[]
}

export function UserList({users}: UserListProps){

    // Sort by initial
    const sortedUsers = [...users].sort((a, b) => 
    a.username.localeCompare(b.username))

    return(
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {
                sortedUsers.map(user => (
                    <UserCard key={user.id} user={user} ></UserCard>
                ))
            }
        </div>
    )
}