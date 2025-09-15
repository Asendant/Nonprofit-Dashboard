import { useState } from "react";
import AuthInputField from "../../components/authinputfield/authinputfield";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div>
            <div>
                <h1>Login</h1>
                <AuthInputField setText={setEmail} value={email} type="email" placeholder="Please enter your email" />
                <AuthInputField setText={setPassword} value={password} type="password" placeholder="Please enter your password." />
            </div>
        </div>
    )
}

export default Login;