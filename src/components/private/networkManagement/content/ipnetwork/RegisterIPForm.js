import React from "react";
import {useAuth0} from "../../../../../auth/react-auth0-spa";
import "./IPNetworkPage.css"


const RegisterIPForm = (props) => {
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
      <form className='new-form' onSubmit={handleSubmit} style={{marginBottom: "1%"}}>
        <div className="showDiv">
          <label htmlFor="ip">IP</label>
          <input className="inputAdd" id="ip" name="ip" type="text"/>
        </div>
        <div className="showDiv">
          <label htmlFor="description">Description</label>
          <input className="inputAdd" id="description" name="description" type="text"/>
        </div>
        <div className="showDiv">
          <label htmlFor="vlan">VLAN</label>
          <select className="inputAdd" name="vlan">
            <option value="0">Choose VLAN</option>
            {props.data.map(rec =>
                <option key={rec.id} value={rec.id}>{rec.body.description}</option>
            )}
          </select>
        </div>
        <input hidden name="owner" defaultValue={user.sub}/>
        <div className="buttonDiv">
          <button>Add</button>
        </div>
      </form>
  );
};

export default RegisterIPForm;