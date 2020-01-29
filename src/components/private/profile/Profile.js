import React, {Fragment} from "react";
import {useAuth0} from "../../../react-auth0-spa";
import PrivateRoute from "../PrivateRoute";
import RegisterDevice from "../device/RegisterDevice";
import VLANPage from "../vlan/VLANPage";
import DefineNAT from "../nat/DefineNAT";
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
        <article>
          <PrivateRoute exact path="/profile" component={ProfileData}/>
          <PrivateRoute exact path="/profile/registerDevice" component={RegisterDevice}/>
          <PrivateRoute exact path="/profile/registerVLAN" component={VLANPage}/>
          <PrivateRoute exact path="/profile/defineNAT" component={DefineNAT}/>
        </article>
      </Fragment>
  );
};

export default Profile;