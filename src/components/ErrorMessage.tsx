
interface ErrorMessageProps {
    message: string,
    onRetry: () => void // function with no arguments that returns nothing
}

export function ErrorMessage({message, onRetry}: ErrorMessageProps){
    return(
        <div role="alert" className="rounded-lg border border-red-200 
        bg-red-50 p-6 text-center max-w-md mx-auto">
            <p className="text-red-700">Something went wrong: {message} </p>
            <button onClick={onRetry} className="mt-4 rounded-lg bg-blue-600
            px-4 py-2 text-white hover:bg-blue-700 ">
                Try again
            </button>
        </div>
        
    )
}