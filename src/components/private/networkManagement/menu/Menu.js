import React, {Fragment} from "react";
import './Menu.css'
import MenuLink from "./MenuLink";

const Menu = () => {
  return (
      <Fragment>
        <menu className='leftMenu'>
          <MenuLink linkTo='/network' description='Profile'/>
          <MenuLink linkTo='/network/Device' description='Host'/>
          <MenuLink linkTo='/network/NAT' description='NAT'/>
          <MenuLink linkTo='/network/VLAN' description='VLAN'/>
          <MenuLink linkTo='/network/IP' description='IP'/>
          <MenuLink linkTo='/network/Database' description='Database'/>
        </menu>
      </Fragment>
  );
};

export default Menu;