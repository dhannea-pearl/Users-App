import { EmptyState } from "../components/EmptyState";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";
import { UserList } from "../components/UserList";
import { useUsers} from "../hooks/useUsers";

export function HomePage() {
    const { data: users, isLoading, isError, error, refetch } = useUsers()

    if(isLoading) return <Loading/>
    if(isError) return <ErrorMessage message={error.message} onRetry={() => refetch()}></ErrorMessage>

    if(!users || users.length === 0) return <EmptyState message="No users found"/>

    return(
        <>
            <h1 className="text-2xl font-bold text-gray-900">Users Directory</h1>
            <p className="mb-6 text-sm text-gray-500">Managing {users.length} total members across the platform </p>
            <UserList users={users} />
        </>
    )
}