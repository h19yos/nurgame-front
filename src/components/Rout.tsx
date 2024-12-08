import {Routes, Route} from "react-router-dom";
import {Links} from '../models/Models.tsx'
import Login from './login/Login.tsx'
import Register from './register/Register.tsx'
import Profile from "./profile/ProfileContainer.tsx";
import ForgotPassword from './login/ForgotPassword.tsx'
import Dashboard from "./home/Dashboard.tsx";
import TestField from "./testfield/TestField.tsx";
import SignIn from "./signmethods/SignIn.tsx";
import CoursesContainer from "./courses/CoursesContainer.tsx";

const Rout = () => {
    return (
        <div className="App">
            <Routes>
                <Route path={Links.profile} element={<Profile />}/>
                <Route path={Links.login} element={<Login/>}/>
                <Route path={Links.register} element={<Register/>}/>
                <Route path={Links.forgotPassword} element={<ForgotPassword/>}/>
                <Route path={Links.home} element={<Dashboard/>}/>
                <Route path={Links.test} element={<TestField/>}/>
                <Route path={Links.testLogin} element={<SignIn/>}/>
                <Route path={Links.courses} element={<CoursesContainer/>}/>
            </Routes>
        </div>
    );
};

export default Rout;