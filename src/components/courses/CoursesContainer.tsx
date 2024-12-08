import Header from "../header/Header.tsx";
import Courses from "./Courses.tsx";

const CoursesContainer = () => {
    return (
        <div className="dashboardHome">
            <Header />
            <Courses />
        </div>
    );
};

export default CoursesContainer;