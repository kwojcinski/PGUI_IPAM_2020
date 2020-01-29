import React, { Fragment } from "react";
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <Fragment>
      <menu style={{width: '300px', high: '100%'}}>
        <Link to="/profile">
          <button>Profil</button>
        </Link>
        <Link to="/profile/Device">
          <button>Urządzenia</button>
        </Link>
        <Link to="/profile/NAT">
          <button>NAT</button>
        </Link>
        <Link to="/profile/VLAN">
          <button>VLAN</button>
        </Link>
        <Link to="/profile/IP">
          <button>IP</button>
        </Link>
      </menu>
    </Fragment>
  );
};

export default Menu;