import React, {Fragment} from "react";
import {useAuth0} from "../../../react-auth0-spa";
import PrivateRoute from "../PrivateRoute";
import DevicePage from "../device/DevicePage";
import VLANPage from "../vlan/VLANPage";
import NATPage from "../nat/NATPage";
import IPNetworkPage from "../ipnetwork/IPNetworkPage";
import ProfileData from "./ProfileData";
import Menu from "./Menu";

const Profile = () => {
  const {loading, user} = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
      <Fragment>
        <Menu/>
        <article style={{marginLeft: "200px"}}>
          <PrivateRoute exact path="/profile" component={ProfileData}/>
          <PrivateRoute exact path="/profile/Device" component={DevicePage}/>
          <PrivateRoute exact path="/profile/VLAN" component={VLANPage}/>
          <PrivateRoute exact path="/profile/IP" component={IPNetworkPage}/>
          <PrivateRoute exact path="/profile/NAT" component={NATPage}/>
        </article>
      </Fragment>
  );
};

export default Profile;