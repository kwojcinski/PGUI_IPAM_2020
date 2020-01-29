import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import './Menu.css'
import MenuLink from "./MenuLink";

const Menu = () => {
  return (
      <Fragment>
        <menu className='leftMenu'>
          <MenuLink linkTo='/profile' description='Profil'/>
          <MenuLink linkTo='/profile/Device' description='Urządzenia'/>
          <MenuLink linkTo='/profile/NAT' description='NAT'/>
          <MenuLink linkTo='/profile/VLAN' description='VLAN'/>
          <MenuLink linkTo='/profile/IP' description='IP'/>
        </menu>
      </Fragment>
  );
};

export default Menu;