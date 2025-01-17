import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const Register: FunctionComponent = ()=>{
    return(
        <div class="register-container">
            <h2>Register</h2>
            <form action="/register" method="POST">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required></input>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required></input>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required></input>
            <button type="submit">Register</button>
            <p class="register-link">
                "Already have an account? "
                <a href="/login">Login</a>
            </p>
            </form>
        </div>
    )
}

export default Register;