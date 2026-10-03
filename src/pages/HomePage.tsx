import { UserList } from "../components/UserList";
import { useUsers} from "../hooks/useUsers";
import { ClipLoader } from "react-spinners";

export function HomePage() {
    const { data: users, isLoading, isError, error, refetch } = useUsers()

    if(isLoading) return <ClipLoader>Loading users...</ClipLoader>
    if(isError) {
        return(
            <div>
                <p>Something went wrong: {error.message}</p>
                <button onClick={() => refetch()}>Try again</button>
            </div>
        )
    }

    if(!users || users.length === 0) return <p>No users found</p>

    return(
        <>
            <h1>Users</h1>
            <UserList users={users} />
        </>
    )
}