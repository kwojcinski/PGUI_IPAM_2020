import React, { Fragment } from "react";
import { useAuth0 } from "../../../../../auth/react-auth0-spa";


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
        <label htmlFor="description">Opis</label>
        <input id="description" name="description" type="text" />

        <label htmlFor="vlan">VLAN</label>
        <select name="cars">
            <option value="0">Wybierz VLAN</option>
            {}
        </select>
        <button>Dodaj</button>
    </form>
  );
};

export default RegisterIP;