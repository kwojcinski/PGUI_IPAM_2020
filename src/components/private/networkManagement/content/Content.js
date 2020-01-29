import React from "react";
import PrivateRoute from "../../PrivateRoute";
import DevicePage from "./device/DevicePage";
import VLANPage from "./vlan/VLANPage";
import NATPage from "./nat/NATPage";
import IPNetworkPage from "./ipnetwork/IPNetworkPage";
import ProfileData from "./profile/ProfileData";
import './Content.css'

const Content = () => {
  return (
      <article className='content'>
        <PrivateRoute exact path="/network" component={ProfileData}/>
        <PrivateRoute exact path="/network/Device" component={DevicePage}/>
        <PrivateRoute exact path="/network/VLAN" component={VLANPage}/>
        <PrivateRoute exact path="/network/IP" component={IPNetworkPage}/>
        <PrivateRoute exact path="/network/NAT" component={NATPage}/>
      </article>
  );
};

export default Content;