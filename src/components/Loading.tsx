import { ClipLoader } from "react-spinners";

export function Loading() {

    return(
        <div className="flex flex-col items-center gap-3 py-16">
            <ClipLoader color="#2563eb"/>
            <p className="text-gray-500">Loading users...</p>

        </div>
    )
}