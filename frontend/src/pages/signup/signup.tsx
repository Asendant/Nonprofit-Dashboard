import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";

import Cookies from 'js-cookie';

import AuthInputField from "../../components/authinputfield/authinputfield";

const Signup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const authToken = Cookies.get('authToken')

        if (authToken != undefined) {
            navigate('/', { replace: true });
        }
    }, [])

    return (
        <div className="min-h-screen w-full bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 flex items-center justify-center px-4">
            {/* Subtle radial glow behind the card */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-72 w-72 rounded-full blur-3xl opacity-30 dark:opacity-20 bg-emerald-300/40 dark:bg-emerald-500/20" />
            </div>

            <div
                className="
                relative w-full max-w-sm
                rounded-xl bg-white/90 dark:bg-neutral-900/80
                border border-neutral-200/80 dark:border-neutral-800
                shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]
                backdrop-blur-sm
                p-6 md:p-7
                "
            >
                {/* Indie/nonprofit header */}
                <div className="mb-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-emerald-600/90 text-white grid place-items-center text-sm font-semibold shadow-sm">
                    NPD
                </div>
                <div>
                    <h1 className="text-lg font-semibold tracking-tight">Welcome!</h1>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    We hope you enjoy your time here!
                    </p>
                </div>
                </div>

                <form className="space-y-4">
                <AuthInputField
                    id="name"
                    label="Name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    setText={setName}
                />
                <AuthInputField
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="you@nonprofit.org"
                    value={email}
                    setText={setEmail}
                />
                <AuthInputField
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    setText={setPassword}
                />

                <button
                    type="submit"
                    className="
                        w-full h-10 rounded-md
                        bg-emerald-600 text-white
                        shadow-sm
                        hover:bg-emerald-700
                        focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900
                        transition
                        my-4
                    "
                    >
                    Register
                    </button>

                    <p className="text-xs text-center mt-2 text-neutral-600 dark:text-neutral-400">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-emerald-700 dark:text-emerald-400 font-medium hover:underline underline-offset-4"
                    >
                        Log in
                    </Link>
                    </p>

                    <p className="text-[11px] leading-5 text-neutral-500 dark:text-neutral-400 text-center mt-4">
                    We never sell data. Read our{" "}
                    <Link to="#" className="underline underline-offset-2">
                        privacy policy
                    </Link>
                    .
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup