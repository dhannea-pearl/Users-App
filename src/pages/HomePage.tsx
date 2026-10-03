import { EmptyState } from "../components/EmptyState";
import { ErrorMessage } from "../components/ErrorMessage";
import { UserList } from "../components/UserList";
import { useUsers} from "../hooks/useUsers";
import { ClipLoader } from "react-spinners";

export function HomePage() {
    const { data: users, isLoading, isError, error, refetch } = useUsers()

    if(isLoading) return <ClipLoader></ClipLoader>
    if(isError) return <ErrorMessage message={error.message} onRetry={() => refetch()}></ErrorMessage>

    if(!users || users.length === 0) return <EmptyState message="No users found"/>

    return(
        <>
            <h1>Users</h1>
            <UserList users={users} />
        </>
    )
}