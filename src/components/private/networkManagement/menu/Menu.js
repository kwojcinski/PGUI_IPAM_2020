import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import './Menu.css'
import MenuLink from "./MenuLink";

const Menu = () => {
  return (
      <Fragment>
        <menu className='leftMenu'>
          <MenuLink linkTo='/network' description='Profil'/>
          <MenuLink linkTo='/network/Device' description='Urządzenia'/>
          <MenuLink linkTo='/network/NAT' description='NAT'/>
          <MenuLink linkTo='/network/VLAN' description='VLAN'/>
          <MenuLink linkTo='/network/IP' description='IP'/>
        </menu>
      </Fragment>
  );
};

export default Menu;