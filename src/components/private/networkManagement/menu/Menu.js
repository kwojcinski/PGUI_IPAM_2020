import React, {Fragment} from "react";
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
          <MenuLink linkTo='/network/Database' description='Database'/>
        </menu>
      </Fragment>
  );
};

export default Menu;