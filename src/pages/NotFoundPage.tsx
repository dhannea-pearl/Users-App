import { Link } from "react-router-dom";
import { EmptyState } from "../components/EmptyState";

export function NotFoundPage() {

    return(
        <>
            <EmptyState message="This page does not exist"/>
            <Link to="/">Back to Home Page</Link>
        
        </>
    )
}