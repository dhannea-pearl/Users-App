import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/Users";

// Hooks for fetching users
export function useUsers() {
    return useQuery({
        queryKey: ["userFetch"],
        queryFn: fetchUsers,
        staleTime: 1000 * 60 * 30,
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        gcTime: 5
    })
}