import { Link } from "react-router-dom";
import Auth from "../../Components/Auth/Auth";
import './Auth.css';
import axios from "axios";

function Signup() {
    return (
        <div className="container">
            <div className="row">
                <h2 className="home-title text-center">
                    Welcome to Shop Cart
                </h2>
            </div>
            <div className="login-wrapper" id="loginForm">
                <h4 className="text-center">Signup</h4>
                <Auth onsubmit={async (authargs) => {
                    try {
                        console.log("Submitting signup form with:", authargs);
                        const response = await axios.post("http://localhost:8765/signup", {
                            username: authargs.username,
                            email: authargs.email,
                            password: authargs.password
                        });
                        console.log("Response:", response);
                    } catch (error) {
                        console.error("There was an error signing up!", error);
                        if (error.response) {
                            console.error("Error response data:", error.response.data);
                        }
                    }
                }} />
                <div className="signup-btn text-center" id="showSignupBtn">
                    <Link to="/signin">
                        Already have an Account? Sign In Here
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;
