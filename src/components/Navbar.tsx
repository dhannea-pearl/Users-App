import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/react-logo-svgrepo-com.svg"

interface NavbarProps {
    currentUserName?: string;
}

export function Navbar({ currentUserName }: NavbarProps) {
    const location = useLocation();
    const isDetailPage = location.pathname.includes("/users/");

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 py-3 sm:px-6">
                {/* Top: Logo & App Title */}
                <div>
                    <NavLink
                        to="/"
                        end
                        className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-90"
                    >
                        <img
                            src={logo}
                            alt="App Logo"
                            className="h-8 w-8 object-contain"
                        />
                        <span className="text-lg font-bold tracking-tight text-gray-900">
                            UserDirectory
                        </span>
                    </NavLink>
                </div>

                {/* Bottom: Breadcrumb Navigation directly under Logo */}
                <nav className="flex items-center gap-2 text-sm font-medium">
                    <NavLink
                        to="/"
                        className={`transition-colors ${
                            !isDetailPage
                                ? "font-bold text-indigo-600"
                                : "text-gray-500 hover:text-gray-900"
                        }`}
                    >
                        Directory
                    </NavLink>

                    {isDetailPage && (
                        <>
                            <span className="text-gray-300">/</span>
                            <span className="max-w-50 truncate font-bold text-indigo-600">
                                {currentUserName || "User Details"}
                            </span>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
