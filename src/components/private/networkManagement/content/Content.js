import React from "react";
import PrivateRoute from "../../PrivateRoute";
import DevicePage from "./device/DevicePage";
import VLANPage from "./vlan/VLANPage";
import NATPage from "./nat/NATPage";
import IPNetworkPage from "./ipnetwork/IPNetworkPage";
import ProfilePage from "./profile/ProfilePage";
import Database from "./database/DatabasePage"
import './Content.css'
import background from "../../../../resources/network-image.jpg";

const Content = (props) => {
  return (
      <article className='content' style={{backgroundImage:`url(${background})`,   backgroundAttachment: 'fixed'}}>
        <PrivateRoute exact path="/network" component={() => <ProfilePage user={props.user}/>}/>
        <PrivateRoute exact path="/network/Device" component={() => <DevicePage user={props.user}/>}/>
        <PrivateRoute exact path="/network/VLAN" component={() => <VLANPage user={props.user}/>}/>
        <PrivateRoute exact path="/network/IP" component={() => <IPNetworkPage user={props.user}/>}/>
        <PrivateRoute exact path="/network/NAT" component={() => <NATPage user={props.user}/>}/>
        <PrivateRoute exact path="/network/Database" component={() => <Database user={props.user}/>}/>
      </article>
  );
};

export default Content;