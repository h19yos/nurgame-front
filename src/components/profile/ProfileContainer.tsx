import Profile from "./Profile.tsx";
import Header from "../header/Header.tsx";

const ProfileContainer = () => {
    return (
        <div className="dashboardHome">
            <Header />
            <Profile />
        </div>
    );
};

export default ProfileContainer;