import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

export const LogoutMessage = ({show, setShow }) => {

    const { logout } = useAuth();
    const navigate = useNavigate();

    async function logoutConfirm() {
        await logout();
        setShow(!show);
        navigate('/login');
    }

    return (
        <div className="text-xl text-center max-w-5xl mx-auto mb-12 dark:text-slate-100 rounded p-4">
            <p className="bi bi-emoji-frown text-primary-800 text-7xl mb-5"></p>
            <p>Are you sure you want to logout?</p>
            <div className="flex justify-center my-2">
                <button onClick={logoutConfirm}className="px-4 py-2 bg-primary-400 mx-1 rounded-lg">Yes</button>
                <button onClick={() => setShow(!show)} className="px-4 py-2 bg-primary-30 mx-1 rounded-lg">No</button>
            </div>
        </div>
    )
}