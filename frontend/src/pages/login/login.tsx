import { useState } from "react";
import AuthInputField from "../../components/authinputfield/authinputfield";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <h1 className="text-lg font-semibold tracking-tight">Welcome back</h1>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Thanks for supporting an open, community-driven project.
            </p>
          </div>
        </div>

        <form className="space-y-4">
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

          <div className="flex items-center justify-between text-xs">
            <label className="inline-flex items-center gap-2 select-none">
              <input
                type="checkbox"
                className="h-3.5 w-3.5 rounded border-neutral-300 dark:border-neutral-700 text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-emerald-700 dark:text-emerald-400 hover:underline underline-offset-4"
            >
              Forgot password?
            </a>
          </div>

          <button
                type="submit"
                className="
                    w-full h-10 rounded-md
                    bg-emerald-600 text-white
                    shadow-sm
                    hover:bg-emerald-700
                    focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900
                    transition
                "
                >
                Sign in
            </button>

            <p className="text-xs text-center mt-3 text-neutral-600 dark:text-neutral-400">
            Don’t have an account?{" "}
            <a
                href="/signup"
                className="text-emerald-700 dark:text-emerald-400 font-medium hover:underline underline-offset-4"
            >
                Sign up
            </a>
            </p>

            <p className="text-[11px] leading-5 text-neutral-500 dark:text-neutral-400 text-center mt-4">
            We never sell data. Read our{" "}
            <a href="#" className="underline underline-offset-2">
                privacy policy
            </a>
            .
            </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
