import React from "react";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../../api/axiosConfig.ts";
import { Http } from "../../models/Models.tsx";

const SignOut: React.FC = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        console.log("Sign-out button clicked");

        try {
            const response = await axiosConfig.post(Http.logout);

            if (response.status === 200) {
                // Clear any stored user data (e.g., tokens)
                localStorage.removeItem("userToken"); // Adjust key as needed
                navigate("/login"); // Redirect to login page
            } else {
                console.error("Sign-out failed with status:", response.status);
            }
        } catch (error) {
            console.error("Error during sign-out:", error);
        }
    };

    return (
        <button onClick={handleSignOut} className="signout-button">
            Sign Out
        </button>
    );
};

export default SignOut;