import React from "react";
import {useAuth0} from "../../auth/react-auth0-spa";
import {Link} from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

  return (
      <div className='navBar'>
        {!isAuthenticated && (
            <button onClick={() => loginWithRedirect({})}>Log in</button>
        )}
        {isAuthenticated && (
            <>
              <button onClick={() => logout()} className='logoutBtn'>
                Log out
              </button>
              <Link to="/network">
                <button>Network Management</button>
              </Link>
              <Link to="/">
                <button>Home</button>
              </Link>
            </>
        )}
      </div>
  );
};

export default NavBar;