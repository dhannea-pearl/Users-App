import { Link } from "react-router-dom";
import { EmptyState } from "../components/EmptyState";

export function NotFoundPage() {

    return(
        <div className="text-center">
            <EmptyState message="This page does not exist"/>
            <Link to="/" className="text-blue-600 hover:underline">
            Back to Home Page
            </Link>
        
        </div>
    )
}