import { Link, Outlet } from "react-router-dom";

const StudentDashboard = () => {
    const option =
        <>
            <li>
                <Link to={'/'}><a>Home</a></Link>
            </li>
            <li>
                <Link to={'/sign-in'}><a>Sign in</a></Link>
            </li>
            <li>
                <Link to={'/sign-up'}><a>Sign up</a></Link>
            </li>
            {/* <li><a>
                <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
            </a></li> */}
        </>

    return (
        <div className="drawer w-full">
            <div className="drawer-content w-full">
                {/* Page content here */}
                <Outlet></Outlet>
            </div>
            <div className="w-full">
                <ul className="menu p-4 w-full min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>Home</a></li>
                    <li><a>Enrolled Courses</a></li>
                    <li><a>Favorite</a></li>
                </ul>
                <ul className="menu p-4  w-full min-h-full bg-base-200 text-base-content">
                    {option}
                </ul>
            </div>
        </div>
    );
};

export default StudentDashboard;