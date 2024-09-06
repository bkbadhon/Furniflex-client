import { useContext, useState } from 'react';
import { IoBagOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const {carts} =useContext(AuthContext)
    const navLinks = (
        <>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
         
          <li>
            <NavLink to={"/categories"}>Categories</NavLink>
          </li>
          
        </>
      );

      const { user, logOut } = useContext(AuthContext);

  const [showLogout, setShowLogout] = useState(false);
  const handleLogout = () => {
    logOut();
    setShowLogout(false)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const defaultImg = 'https://i.ibb.co.com/t8hpZbG/avatar-removebg-preview.png' ;
    return (
        <div className="navbar w-11/12 mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-blue-500 text-white  z-[10] p-2 shadow rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a>
            <h2><span className='bg-blue-600 italic text-2xl text-white p-1 px-4 rounded-full'>F</span><span className='text-2xl font-semibold'>Furni<span className='text-blue-600'>Flex</span></span></h2>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex md:flex">
        <ul className="menu menu-horizontal px-5">{navLinks}</ul>
      </div>
      <div className="navbar-end ">
        <div className="relative mr-4 flex justify-center items-center">
          <button className=" flex justify-center items-center">
          <Link to={'/cart'}>
          <IoBagOutline className="text-3xl" />
          </Link>
          
          </button>
            <div className="badge absolute text-white -right-1 top-4 bg-black p-[5px]">{carts.length}</div>

        </div>
     
        
       

         {!user ? (
          <Link to={"/login"}>
            <button className="p-2 mr-4 rounded bg-blue-500 text-white">
              Login
            </button>
          </Link>
          
        ) : (
          
            <div style={{ position: 'relative' }}>
              <img
                src={user?.photoURL || defaultImg} 
                alt="Avatar"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
                onClick={toggleLogout}
              />
              {showLogout && (
                <button
                  onClick={handleLogout}
                  style={{
                    position: 'absolute',
                    top: '40px',
                    zIndex:'10',
                    left: '-15px',
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    padding: '5px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          
        )} 
      </div>
    </div>
    );
};

export default Navbar;