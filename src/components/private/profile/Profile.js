import React, { Fragment } from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import {Link} from "react-router-dom";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
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
  );
};

export default Profile;