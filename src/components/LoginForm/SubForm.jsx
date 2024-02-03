import React from "react";
import './SubForm.css';


const SubForm = () => {
    return(
        <div className="subform-wrapper">
            <div className="sign-in-with-a-passkey"> 
             <a href="">Sign in with a passkey</a> 
            </div>
            <div className="sign-in-new-to">
                <div className="new-to-github">New to GitHub? </div>
                <div className="create-an-account">
                    <a href="#">Create an account</a>
                </div>
            </div>
        </div>
    );
};

export default SubForm;
