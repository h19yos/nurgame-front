import SignOut from "../signmethods/SignOut.tsx";
import {useNavigate} from "react-router-dom";
import {Links} from "../../models/Models.tsx";

const TestField = () => {
    const navigate = useNavigate();

    const handleLoginNav = () => {
        navigate(Links.testLogin);
    }

    return (
        <div className={"testField"}>
            <div className={"testField__wrapper"}>
                <div className={"testField__main"}>
                    <div className={"testField__main-content"}>
                        <h1>Hello World!</h1>
                        <p>Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello
                            World!</p>
                        <div>
                            <SignOut />
                            <button onClick={handleLoginNav}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestField;