import React, { Fragment } from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import {Link, Route, Switch} from "react-router-dom";
import Homepage from "../../public/Homepage";
import PrivateRoute from "../PrivateRoute";
import RegisterDevice from "../device/RegisterDevice";
import VLANPage from "../vlan/VLANPage";
import DefineNAT from "../nat/DefineNAT";
import ProfileData from "./ProfileData";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>

      <menu>
        <Link to="/profile">
          <button>Profil</button>
        </Link>
        <Link to="/profile/registerDevice">
          <button>Zarejestruj urządzenie</button>
        </Link>
        <Link to="/profile/defineNAT">
          <button>Zdefiniuj NAT</button>
        </Link>
        <Link to="/profile/registerVLAN">
          <button>Zarejestruj VLAN</button>
        </Link>
      </menu>

      <Switch>
        <PrivateRoute exact path="/profile" component={ProfileData}/>
        <PrivateRoute exact path="/profile/registerDevice" component={RegisterDevice}/>
        <PrivateRoute exact path="/profile/registerVLAN" component={VLANPage}/>
        <PrivateRoute exact path="/profile/defineNAT" component={DefineNAT}/>
      </Switch>
    </Fragment>
  );
};

export default Profile;