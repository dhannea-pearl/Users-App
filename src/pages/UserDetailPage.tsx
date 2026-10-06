import { useParams, Link } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { ErrorMessage } from "../components/ErrorMessage";
import { EmptyState } from "../components/EmptyState";
import { Loading } from "../components/Loading";
import { RoleBadge } from "../components/RoleBadge";
import { CircleUser } from "lucide-react"; 

export function UserDetailPage() {
    const { id } = useParams();
    const { data: users, isLoading, isError, error, refetch } = useUsers();

    if (isLoading) return <Loading />;
    if (isError)
        return (
            <ErrorMessage
                message={error.message}
                onRetry={() => refetch()}
            ></ErrorMessage>
        );

    const user = users?.find((u) => String(u.id) === id);

    if (!user) return <EmptyState message="No users found" />;


    return (
        <>
            <Link
                to="/"
                className="mb-6 inline-block text-blue-600 hover:underline"
            >
                Back to all users
            </Link>

            <div>
                {/* Usernames section */}
                <div className="flex flex-col items-center gap-5">
                    <div
                        className="flex h-20 w-20 shrink-0 items-center justify-center 
                    rounded-full bg-gray-200 text-2xl font-semibold text-white"
                    >
                        <CircleUser className="text-black h-13 w-13" />
                    </div>
                    <h1 className="-mt-4 text-2xl font-bold text-gray-900">
                        {user.profile.name}{" "}
                    </h1>

                    {/* Username and roles */}
                    <div className="-mt-3 flex gap-2 items-center ">
                        <p className="text-gray-500">@{user.username} </p>
                        <div className=" flex flex-wrap gap-2">
                            {user.roles.map((role) => (
                                <RoleBadge key={role} role={role} />
                            ))}
                        </div>
                    </div>

                </div>

                <hr className="w-full my-8 border-t border-gray-300 "/>

                <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-16 my-8">
                    
                    <section className="flex flex-col gap-5 ">
                    {/* Contact */}
                        <div>
                            <h2 className="mb-3 font-semibold text-gray-900">
                            Contact
                            </h2>
                            <p className="wrap-break-word text-gray-600">
                                {user.profile.email}
                            </p>
                        </div>

                        {/* Address */}
                        <div>
                            <h2 className="mb-3 font-semibold text-gray-900">Address</h2>
                            <p>{user.profile.address.street}</p>
                            <p>
                                {user.profile.address.zipCode}
                                {user.profile.address.city}
                            </p>
                        </div>
                </section>

                <section className="flex flex-col gap-5">
                    <h2 className="mb-3 font-semibold text-gray-900">Settings</h2>
                    <p> Email Notifications:{" "}
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                            user.settings.notifications.email
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-rose-100 text-rose-700"
                            }`}>
                            {user.settings.notifications.email ? "On" : "Off"}
                        </span>
                        
                    </p>
                    <p>Push Notifications:{" "}
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                            user.settings.notifications.push
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-rose-100 text-rose-700"
                            }`}>
                            {user.settings.notifications.push ? "On" : "Off"}
                        </span>
                        
                        
                    </p>
                 </section>

                </div>
                
            </div>
            

            
        </>
    );
}
