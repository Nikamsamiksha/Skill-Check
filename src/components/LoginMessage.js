import { Link } from "react-router-dom"

export const LoginMessage = () => {

    return(
        <div className="text-xl text-center max-w-5xl mx-auto mb-12 dark:text-slate-100 rounded p-4">
            <p className="bi bi-emoji-frown text-primary-800 text-7xl mb-5"></p>
            <p>Oops! You have not logged in yet</p>
            <p>Please 
            <Link to="/login" className="text-primary-800 hover:text-primary-900 text-lg hover:underline ml-1">
                Login
            </Link>
            </p>
        </div>
    )
}