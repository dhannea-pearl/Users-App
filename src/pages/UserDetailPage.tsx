import { useParams, Link } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { ClipLoader } from "react-spinners";
import { ErrorMessage } from "../components/ErrorMessage";
import { EmptyState } from "../components/EmptyState";

export function UserDetailPage() {
    const {id} = useParams()
    const {data: users, isLoading, isError, error, refetch} = useUsers()


    if(isLoading) return <ClipLoader/>
    if(isError) return <ErrorMessage message={error.message} onRetry={() => refetch()}></ErrorMessage>
    
    const user = users?.find((u) => String(u.id)=== id)

    if(!user) return <EmptyState message="No users found"/>
    

    return (
        <>
            <Link to="/">Back to all users</Link>

            <h1>{user.profile.name} </h1>
            <p>@{user.username} </p>
            <p>{user.profile.email}</p>

            <h2>Address</h2>
            <p>{user.profile.address.street}</p>
            <p>
                {user.profile.address.zipCode}
                {user.profile.address.city}
            </p>

            <h2>Settings</h2>
            <p>Email Notifications: {user.settings.notifications.email ? "On" : "Off"}</p>
            <p>Push Notifications: {user.settings.notifications.push ? "On" : "Off"}</p>

            <h2>Role</h2>
            <p>{user.roles.join(", ")}</p>
        </>
    )
}