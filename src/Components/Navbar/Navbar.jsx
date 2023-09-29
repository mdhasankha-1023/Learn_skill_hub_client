import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            {/* <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div> */}
            <div className='navbar-start'>
                <figure className='w-[180px]'><img className='w-full' src={logo} alt="company logo" /></figure>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li tabIndex={0}><a>Courses</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
            <ul className="menu menu-horizontal px-1">
                    <li><a>Sign in</a></li>
                    <li><a>Sign up</a></li>
                    <li><a>
                        <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
                    </a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;