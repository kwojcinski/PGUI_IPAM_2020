import React, { Fragment } from "react";
import { useAuth0 } from "../../../../../react-auth0-spa";


const RegisterIP = (props) => {
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
    <form onSubmit={handleSubmit}>
        <label htmlFor="ip">IP</label>
        <input id="ip" name="ip" type="text" />

        <label htmlFor="description">Opis</label>
        <input id="description" name="description" type="text" />

        <label htmlFor="vlan">VLAN</label>
        <select name="vlan">
            <option value="0">Wybierz VLAN</option>
            {props.data.map(rec =>
                <option key={rec.id} value={rec.id}>{rec.body.description}</option>
            )}
        </select>
        <button>Dodaj</button>
    </form>
  );
};

export default RegisterIP;