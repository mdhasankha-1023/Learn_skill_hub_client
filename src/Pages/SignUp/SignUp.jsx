import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";

const SignUp = () => {
    const { signUp } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [clicked, setClicked] = useState(false)


    const signUpForm = (event, user) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const userInfo = { email, name, type: 'student' }
        console.log(userInfo, user)


        if (password === confirmPassword) {
            signUp(email, password)
                .then(result => {
                    const user = result.user;
                    form.reset();
                    setError('')
                    navigate('/sign-in')
                    // console.log(user)
                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)

                    })
                    .then(res => res.json())
                    .then(data => {
                            console.log(data);
                            if (data.insertedId) {
                                console.log('success')
                                form.reset()
                            }
                        })
                        .catch(error => console.log(error.message))
                })
                .catch(error => console.log(error.message))
        }
        else {
            setError(true)
        }

    }

    const handleCheckBox = () => {
        setClicked(!clicked)
    }


    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-center underline text-3xl font-bold my-4">Sign Up</h1>
                    <div className="card-body">
                        <form onSubmit={signUpForm}>
                            <div className="flex gap-4">
                                {/* name */}
                                <div className="form-control w-[50%]">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" required placeholder="Full Name" className="input input-bordered" />
                                </div>
                                {/* email */}
                                <div className="form-control w-[50%]">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                {/* password */}
                                <div className="form-control w-[50%]">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={clicked ? 'text' : 'password'} name="password" required placeholder="password" className="input input-bordered" />
                                </div>
                                {/* confirm password */}
                                <div className="form-control w-[50%]">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type={clicked ? 'text' : 'password'} name="confirmPassword" required placeholder="Confirm password" className="input input-bordered" />
                                </div>
                            </div>
                            {/* error */}
                            {error && <>
                                <p className="text-red-500">Pleace confirm the password</p>
                            </>}
                            {/* check box */}
                            <div className="flex gap-3 mt-3 items-center w-[25%]">
                                <input onClick={handleCheckBox} type="checkbox" className="checkbox" />
                                {clicked ? <p className="font-bold">Hide</p> : <p className="font-bold">Show</p>}
                            </div>

                            {/* radio button */}
                            <div className="form-control flex-row items-center gap-8 mt-4">
                                <label className="label">
                                    <span className="label-text">As a :</span>
                                </label>
                                <div className="flex gap-4">
                                    <div className="flex gap-2">
                                        <input type="radio" name="radio-1" className="radio" checked />
                                        <p>student</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <input type="radio" name="radio-1" className="radio" />
                                        <p>Instructor</p>
                                    </div>
                                </div>
                            </div>
                            {/* picture link */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Picture Link</span>
                                </label>
                                <input type="text" name="text" required placeholder="Picture link" className="input input-bordered" />
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