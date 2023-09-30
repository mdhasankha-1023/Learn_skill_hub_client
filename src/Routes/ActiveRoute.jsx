import { NavLink } from "react-router-dom";

const ActiveRoute = ({children, to}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "bg-[#BB54AC]" : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute;