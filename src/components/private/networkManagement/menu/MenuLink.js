import React from "react";
import {Link} from "react-router-dom";
import './Menu.css'

const MenuLink = (props) => {
  return (
      <div className='menuLink'>
        <Link to={props.linkTo}>
          <button>{props.description}</button>
        </Link>
      </div>
  );
};

export default MenuLink;