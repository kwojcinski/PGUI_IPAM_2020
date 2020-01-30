import React, {Fragment} from "react";

const ProfileData = (props) => {
  const {user} = props;
  return (
      <Fragment>
        <img src={user.picture} alt="NetworkManagment"/>

        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <code>{JSON.stringify(user, null, 2)}</code>
      </Fragment>
  );
};

export default ProfileData;