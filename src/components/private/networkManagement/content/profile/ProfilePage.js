import React, {Fragment} from "react";
import './ProfilePage.css'

const ProfilePAge = props => {
  let {user} = props;
  return (
      <Fragment>
        <div className='profile-title'>
          Managing user profile: {props.user.email}
        </div>

        <div className='profile-user-data'>
          <img src={user.picture} alt="NetworkManagment" height='200px' width='200px'/>
          <div>
            <h2>Imię i nazwisko: {user.name}</h2>
            <p>Email: {user.email}</p>
          </div>
        </div>
      </Fragment>
  );
};

export default ProfilePAge;