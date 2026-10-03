
interface ErrorMessageProps {
    message: string,
    onRetry: () => void // function with no arguments that returns nothing
}

export function ErrorMessage({message, onRetry}: ErrorMessageProps){
    return(
        <>
        <p>Something went wrong: {message} </p>
        <button onClick={onRetry}>Try again</button>
        </>
        
    )
}