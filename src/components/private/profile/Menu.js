import React, { Fragment } from "react";
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <Fragment>
      <menu style={{width: '300px', high: '100%'}}>
        <Link to="/profile">
          <button>Profil</button>
        </Link>
        <Link to="/profile/registerDevice">
          <button>Zarejestruj urządzenie</button>
        </Link>
        <Link to="/profile/defineNAT">
          <button>Zdefiniuj NAT</button>
        </Link>
        <Link to="/profile/registerVLAN">
          <button>Zarejestruj VLAN</button>
        </Link>
      </menu>
    </Fragment>
  );
};

export default Menu;