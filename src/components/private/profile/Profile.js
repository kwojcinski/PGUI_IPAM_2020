import React, {Fragment} from "react";
import {useAuth0} from "../../../react-auth0-spa";

import Menu from "./Menu";
import Content from "./Content";

const Profile = () => {
  const {loading, user} = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
      <Fragment>
        <Menu/>
        <Content/>
      </Fragment>
  );
};

export default Profile;