import React from "react";
import './LoginForm.css';

const LoginForm = () => {
    return(
        <div className="wrapper">
            <form action="">  
                <div className="input-box">
                    <label className="input-label">Username or email address </label>
                    <br></br>
                    <input type="text"  required></input>
                </div>
                <div className="input-box">
                    <div className="forgot-password"> 
                        <label>Password</label>
                        <a href="#">Forgot password?</a>    
                    </div>
                    <br></br>
                    <input type="password" required></input>
                </div>
                <button type="submit"> Sign in</button>
            </form>
        </div>
    );
};

export default LoginForm;
