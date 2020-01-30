import React, {Fragment} from "react";

const ProfilePAge = props => {
  return (
      <Fragment>
        <div>
          Profil użytkownika zarządzającego: {props.user.email}
        </div>
        <div style={{display: "inline"}}>
          <img src={user.picture} alt="NetworkManagment" height='50px' width='50px'/>
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
        <code>{JSON.stringify(user, null, 2)}</code>
      </Fragment>
  );
};

export default ProfilePAge;