import React from "react";
import PrivateRoute from "../PrivateRoute";
import DevicePage from "../device/DevicePage";
import VLANPage from "../vlan/VLANPage";
import NATPage from "../nat/NATPage";
import IPNetworkPage from "../ipnetwork/IPNetworkPage";
import ProfileData from "./ProfileData";
import './Content.css'

const Content = () => {
  return (
      <article className='content'>
        <PrivateRoute exact path="/profile" component={ProfileData}/>
        <PrivateRoute exact path="/profile/Device" component={DevicePage}/>
        <PrivateRoute exact path="/profile/VLAN" component={VLANPage}/>
        <PrivateRoute exact path="/profile/IP" component={IPNetworkPage}/>
        <PrivateRoute exact path="/profile/NAT" component={NATPage}/>
      </article>
  );
};

export default Content;