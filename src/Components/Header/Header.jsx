import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Header = () => {

  const { user, logOut } = useContext(authContext);
  console.log(user);
  
  const handleLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch(error => console.log(error))
  }
    return (
      <div className="">
        <div className="navbar bg-primary text-primary-content">
          <Link className="btn btn-ghost normal-case text-xl">
            KhalammarBari
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </Link>
          {user && (
            <div>
              <Link className="btn btn-ghost normal-case text-xl" to="/order">
                Order
              </Link>
              <Link className="btn btn-ghost normal-case text-xl" to="/profile">
                Profile
              </Link>
            </div>
          )}
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            Login
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/register">
            Register
          </Link>
          {user && (
            <div>
              <span>
                <p className="text-white">{user.email}</p>
              </span>

              <span>
                <button
                  onClick={handleLogOut}
                  className="btn btn-active btn-primary"
                >
                  Sign Out
                </button>
              </span>
            </div>
          )}
        </div>
      </div>
    );
};

export default Header;