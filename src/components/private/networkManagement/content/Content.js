import React from "react";
import PrivateRoute from "../../PrivateRoute";
import DevicePage from "./device/DevicePage";
import VLANPage from "./vlan/VLANPage";
import NATPage from "./nat/NATPage";
import IPNetworkPage from "./ipnetwork/IPNetworkPage";
import ProfilePage from "./profile/ProfilePage";
import './Content.css'

const Content = (props) => {
  return (
      <article className='content'>
        <PrivateRoute exact path="/network" component={() => <ProfilePage user={props.user} />}/>
        <PrivateRoute exact path="/network/Device" component={() => <DevicePage user={props.user}/>} />
        <PrivateRoute exact path="/network/VLAN" component={VLANPage}/>
        <PrivateRoute exact path="/network/IP" component={IPNetworkPage}/>
        <PrivateRoute exact path="/network/NAT" component={NATPage}/>
      </article>
  );
};

export default Content;