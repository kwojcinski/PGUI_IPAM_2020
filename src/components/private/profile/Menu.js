import React, {Fragment} from "react";
import {Link} from "react-router-dom";

const Menu = () => {
  return (
      <Fragment>
        <menu style={{
          position: 'fixed',
          left: 0, bottom: 0, top: '50px',
          width: '200px',
          margin: 0,
          padding: '20px 10px',
        }}>
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