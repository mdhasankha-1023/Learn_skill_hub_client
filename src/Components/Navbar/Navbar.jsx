import { faBars, faCircleUser, faX } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Authprovider/Authprovider';
import ActiveRoute from '../../Routes/ActiveRoute';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const { user, LogOut, successMsg } = useContext(AuthContext);
    const navbar = useNavigate();
    console.log(user)

    const handleBars = () => {
        setClicked(!clicked)
    }

    // signOut
    const signOutBtn = () => {
        LogOut()
        .then(() => {
            successMsg('SignOut successful')
            navbar('/sign-in')
        })
        .catch(error => console.log(error.message))
    }

    const optionLg =
        <>
            <ActiveRoute to={'/'}><a>Home</a></ActiveRoute>
            <ActiveRoute to={'/courses'}><a>Courses</a></ActiveRoute>
            <ActiveRoute to={'/blog'}><a>Blog</a></ActiveRoute>
        </>
    const optionSm =
        <>
            <li><a>Home</a></li>
            <li><a>Courses</a></li>
            <li><a>Blog</a></li>
            <Link to={'/sign-in'}><a>Sign in</a></Link>
            <Link to={'/sign-up'}><a>Sign up</a></Link>
            <li><a>
                <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
            </a></li>
        </>


    return (
        <div className="navbar bg-[#F6711E]">
            <div className='navbar-start'>
                <figure className='w-[180px]'><img className='w-full' src={logo} alt="company logo" /></figure>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1 gap-8">
                    {optionLg}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center">
                    {user ?
                        <>
                        <li onClick={signOutBtn}>SignOut</li>
                        <li><a>
                         <FontAwesomeIcon className='text-3xl' icon={faCircleUser}></FontAwesomeIcon>
                        </a></li>
                        </>
                        :
                        <>
                        <Link to={'/sign-in'}><a>Sign in</a></Link>
                        <Link to={'/sign-up'}><a>Sign up</a></Link>
                        </>

                    }

                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown">
                    <label onClick={handleBars} className="btn btn-ghost">
                        {clicked === true ?
                            <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                            :
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        }
                    </label>
                </div>
                <ul className={clicked ? 'menu menu-sm dropdown-content mt-3 z-[1] p-2 absolute top-20 shadow bg-base-100  w-full items-center' : 'hidden'}>
                    {optionSm}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;