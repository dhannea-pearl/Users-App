
interface RoleBadgeProps {
    role: string
}

export function RoleBadge({role}: RoleBadgeProps) {
    return (
        <span key={role}
             className= {`rounded-full px-2 py-0.5 text-xs font-medium ${
                role === "admin" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
            }`}>
            {role}
        </span>
    )
}