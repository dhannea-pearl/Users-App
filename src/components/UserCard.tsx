import { Link } from "react-router-dom";
import type { User } from "../types/User";
import { RoleBadge } from "./RoleBadge";

interface UserCardProps{
    user: User
}

export function UserCard({ user }: UserCardProps) {
    const initial = user.profile.name.charAt(0).toUpperCase()

    return(
        <Link to={`/users/${user.id}`} 
        className="flex items-start gap-4
        rounded-xl border border-gray-200 bg-white p-4
        shadow-sm hover:border-blue-500 hover:shadow-md transition">
            
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full
            bg-blue-600 font-semibold text-white">
                {initial}
            </div>

            <div className="min-w-0">
                <h3 className="font-semibold text-gray-900">{user.profile.name}</h3> 
                <p className="text-sm text-gray-500">@{user.username}</p>
                <p className="truncate text-sm text-gray-600">{user.profile.email}</p> 
                <div className="mt-2 flex flex-wrap gap-2">
                    {user.roles.map((role) => (
                        <RoleBadge key={role} role={role} />
                    ))}
                </div>
            </div>
            
        </Link>
    )
}