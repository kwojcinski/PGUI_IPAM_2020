import React from "react";
import {useAuth0} from "../../../../../auth/react-auth0-spa";
import "./DevicePage.css"

const RegisterDeviceForm = (props) => {
  const {loading, user} = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    props.handleSubmit(data);
    event.target.reset();
  };

  return (
      <form className='new-device-form' onSubmit={handleSubmit} style={{marginBottom: "1%"}}>
        <div className="showDiv">
          <label htmlFor="ip">IP Address</label>
          <input className="inputAdd" id="ip" name="ip" type="text"/>
        </div>
        <div className="showDiv">
          <label htmlFor="name">Host name</label>
          <input className="inputAdd" id="name" name="name" type="text"/>
        </div>
        <div className="showDiv">
          <label htmlFor="description">Host description</label>
          <input className="inputAdd" id="description" name="description" type="text"/>
        </div>
        <input hidden name="owner" defaultValue={user.sub}/>
        <div className="buttonDiv">
          <button>Add</button>
        </div>
      </form>
  );
};

export default RegisterDeviceForm;