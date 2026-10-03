import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/Users";

// Hooks for fetching users
export function useUsers() {
    const THIRTY_MINUTES = 1000 * 60 * 30
    return useQuery({
        queryKey: ["userFetch"],
        queryFn: fetchUsers,
        staleTime: THIRTY_MINUTES,
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        gcTime: 5
    })
}