import React from "react";
import {useAuth0} from "../../../../../auth/react-auth0-spa";
import "./NATPage.css"

const DefineNATForm = (props) => {
  const {loading, user} = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    props.handleSubmit(data);
  };

  return (
      <form className='new-form' onSubmit={handleSubmit} style={{marginBottom: "1%"}}>
        <div className="showNatDiv">
          <label htmlFor="name">Name</label>
          <input className="inputNatAdd" id="name" name="name" type="text"/>
        </div>
        <div className="showNatDiv">
          <label htmlFor="device">Host</label>
          <select className="inputNatAdd" name="device">
            <option value="0">Choose host</option>
            {props.hostData.map(rec =>
                <option key={rec.id} value={rec.id}>{rec.body.name}</option>
            )}
          </select>
        </div>
        <div className="showNatDiv">
          <label htmlFor="description">Description</label>
          <input className="inputNatAdd" id="description" name="description" type="text"/>
        </div>
        <div className="showNatDiv">
          <label htmlFor="externalIP">External IP</label>
          <input className="inputNatAdd" id="externalIP" name="externalIP" type="text"/>
        </div>
        <div className="showNatDiv">
          <label htmlFor="ip">IP</label>
          <select className="inputNatAdd" name="ip">
            <option value="0">Choose IP</option>
            {props.ipData.map(rec =>
                <option key={rec.id} value={rec.id}>{rec.body.ip}</option>
            )}
          </select>
        </div>
        <input className="inputNatAdd" hidden name="owner" defaultValue={user.sub}/>
        <div className="buttonDiv">
          <button>Add</button>
        </div>
      </form>
  );
};

export default DefineNATForm;