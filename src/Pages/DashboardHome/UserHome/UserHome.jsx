import { useContext } from "react";
import { AuthContext } from "../../../Authprovider/Authprovider";

const UserHome = () => {
    const {user} = useContext(AuthContext)
    console.log(user.photoURL)
    return (
        <div className="mx-auto w-full">
            <div className="avatar items-center flex-col gap-8">
                <div className="w-24 rounded-full">
                    <img src={user.photoURL} />
                </div>
                <h1 className="text-justify font-bold text-3xl">User Name : {user.displayName}</h1>
                <h1 className="text-justify font-bold text-3xl">User Email : {user.email}</h1>
            </div>
        </div>
    );
};

export default UserHome;