import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/collages">Colleges</Link></li>
        <li><Link to="/myCollege">My College</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        {/* <li><Link to="/about">About Us</Link></li> */}
        <li><Link to="/dashboard/adminDashboard">Dashboard</Link></li>

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Demo</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                            <Link to="dashboard/profile"><img className='rounded-circle w-10' title={user.displayName} style={{ height: '40px' }} src={user.photoURL} alt="" /></Link>
                            <Link onClick={handelLogout} className="btn">Log Out</Link></>
                            : <><Link to="/login" className="btn">Sing In</Link></>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;