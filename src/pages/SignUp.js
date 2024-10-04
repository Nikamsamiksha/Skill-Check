import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import skillCheckIcon from '../assets/SkillCheckIcon.jpg';

export const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { signup } = useAuth();
    const history = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await signup(email, password, username);
            history('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to create an account!");
        }
    }

    return (
        <main className="flex justify-center items-center h-screen overflow-y-hidden">
            <div>
                <div className="flex flex-col justify-center lg:my-2">
                    <h2 className="text-2xl font-bold self-center lg:my-5 my-2">Skill Check</h2>
                    <img src={skillCheckIcon} alt="SkillCheckIcon" className="w-32 h-32 lg:w-40 lg:h-40 self-center" />
                </div>
                <form className="mx-auto">
                    <div className="mb-5">
                        <label for="email" className="block mb-1 lg:mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                            placeholder="name@gmail.com"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label for="password" className="block mb-1 lg:mb-2 text-sm font-medium text-gray-900">Your password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="text-black bg-primary-800 hover:bg-primary-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                {error && <p className="error">{error}</p>}
            </div>
        </main>

    );
}
