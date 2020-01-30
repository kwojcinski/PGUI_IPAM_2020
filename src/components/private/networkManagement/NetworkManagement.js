import React, {Fragment} from "react";
import {useAuth0} from "../../../auth/react-auth0-spa";

import Menu from "./menu/Menu";
import Content from "./content/Content";

const NetworkManagement = () => {
  const {loading, user} = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
      <Fragment>
        <Menu/>
        <Content user={user}/>
      </Fragment>
  );
};

export default NetworkManagement;