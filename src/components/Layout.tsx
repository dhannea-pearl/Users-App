import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Layout() {

    return(
        <>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}