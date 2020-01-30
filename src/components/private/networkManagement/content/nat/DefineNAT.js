import React from "react";
import { useAuth0 } from "../../../../../auth/react-auth0-spa";

const DefineNAT = (props) => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    props.handleSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} style={{marginBottom: "1%"}}>

        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="device">Host</label>
        <select name="device">
            <option value="0">Choose host</option>
            {props.hostData.map(rec =>
                <option key={rec.id} value={rec.id}>{rec.body.name}</option>
            )}
        </select>

        <label htmlFor="description">Description</label>
        <input id="description" name="description" type="text" />

        <label htmlFor="externalIP">External IP</label>
        <input id="externalIP" name="externalIP" type="text" />

        <label htmlFor="ip">IP</label>
        <select name="ip">
            <option value="0">Choose IP</option>
            {props.ipData.map(rec =>
                <option key={rec.id} value={rec.id}>{rec.body.ip}</option>
            )}
        </select>
        <input hidden name="owner" defaultValue={user.sub} />
        <button>Add</button>
    </form>
  );
};

export default DefineNAT;