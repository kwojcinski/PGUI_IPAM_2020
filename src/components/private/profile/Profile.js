<<<<<<< HEAD
import React, { Fragment } from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import {Link} from "react-router-dom";
=======
import React, {Fragment} from "react";
import {useAuth0} from "../../../react-auth0-spa";
import PrivateRoute from "../PrivateRoute";
import RegisterDevice from "../device/RegisterDevice";
import VLANPage from "../vlan/VLANPage";
import DefineNAT from "../nat/DefineNAT";
import ProfileData from "./ProfileData";
import Menu from "./Menu";
>>>>>>> fdc987def77ddfc89fc2b210bd9023569a967eec

const Profile = () => {
  const {loading, user} = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
<<<<<<< HEAD
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
      <Link to="/registerDevice">
          <button>Zarejestruj urządzenie</button>
      </Link>
      <Link to="/defineNAT">
          <button>Zdefiniuj NAT</button>
      </Link>
      <Link to="/registerVLAN">
          <button>Zarejestruj VLAN</button>
      </Link>
    </Fragment>
=======
      <Fragment>
        <Menu/>
        <article>
          <PrivateRoute exact path="/profile" component={ProfileData}/>
          <PrivateRoute exact path="/profile/registerDevice" component={RegisterDevice}/>
          <PrivateRoute exact path="/profile/registerVLAN" component={VLANPage}/>
          <PrivateRoute exact path="/profile/defineNAT" component={DefineNAT}/>
        </article>
      </Fragment>
>>>>>>> fdc987def77ddfc89fc2b210bd9023569a967eec
  );
};

export default Profile;