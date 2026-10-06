import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Layout() {

    return(
        <div className="flex min-h-screen flex-col bg-gray-50">
             <Navbar></Navbar>

            <main className="flex-1 w-full max-w-5xl mx-auto p-6">
                <Outlet></Outlet>
            </main>

            <footer className="py-6 text-center text-sm text-gray-500">
                <span>Project developed by Dhannea Pettersson</span>
            </footer>
        </div>
    )
}