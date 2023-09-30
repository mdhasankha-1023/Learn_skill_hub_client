import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;