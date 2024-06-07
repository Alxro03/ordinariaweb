import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";


type LoginProps={
    message: string;
}

const Login: FunctionComponent<LoginProps> = ({message})=>{
    return(
        <div class="login-container">
            <h2>Login</h2>
            <form method="POST" action="/login">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" required></input>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required></input>
            <button type="submit">Login</button>
            <p class="register-link">
                "Don't have an account? "
                <a href="/register">Register</a>
            </p>
            </form>
        </div>
    )
}

export default Login;