import type {User } from "../types/User"

// API-funktionen är sedan exporterat till hooks
export async function fetchUsers(): Promise<User[]>{
    const res = await fetch(
        "https://api-userapi.onrender.com/api/users/getUsers",
        {
            headers: {
                "x-api-key": import.meta.env.VITE_API_KEY,
            },
        }
    )

    if(!res.ok){
        throw new Error("Unable to fetch data")
    }

    return res.json()
}