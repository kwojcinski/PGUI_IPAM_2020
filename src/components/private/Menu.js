import React from "react";
import {useAuth0} from "../../react-auth0-spa";
import {Link} from "react-router-dom";

const Menu = () => {
  const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

  return (
      <div className='menu'>
        {isAuthenticated && (
            <>
              <Link to="/VLANPage">
                <button>Vlan</button>
              </Link>
              <Link to="/profile">
                <button>Profile</button>
              </Link>
              <Link to="/">
                <button>Home</button>
              </Link>
            </>
        )}
      </div>
  );
};

export default Menu;