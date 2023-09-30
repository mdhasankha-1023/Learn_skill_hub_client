import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";

const SignUp = () => {
    const {signUp} = useContext(AuthContext)
    const navigate = useNavigate()


    const signUpForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = {email, password}
        console.log(userInfo)
        signUp(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            navigate('/sign-in')
            // console.log(user)
        })
        .catch(error => console.log(error))

    }


    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content w-[70%]">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-center underline text-3xl font-bold my-4">Sign Up</h1>
                    <div className="card-body">
                        <form onSubmit={signUpForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign up</button>
                            </div>
                        </form>
                        <div className="flex w-full justify-center items-center mt-4">
                            <hr className="w-[39%]" />
                            <div className="w-[12%] border text-xl font-bold">OR</div>
                            <hr className="w-[39%]" />
                        </div>
                        {/* <div className="flex justify-center gap-4 mt-4">
                            <div onClick={handleGoogleBtn} className="border rounded-full p-3 text-2xl cursor-pointer">
                                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                            </div>
                            <div onClick={handGithubBtn} className="border rounded-full p-3 text-2xl cursor-pointer">
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            </div>
                        </div> */}
                        <p className="text-center text-xl">Already have a account? <Link className="text-blue-500 font-bold" to={'/sign-in'}> SignIn</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;