import React, { Fragment } from "react";
import { useAuth0 } from "../../../../../react-auth0-spa";

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
    <form onSubmit={handleSubmit}>

        <label htmlFor="name">Nazwa</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="device">Urządzenie</label>
        <input id="device" name="device" type="text" />

        <label htmlFor="description">Opis</label>
        <input id="description" name="description" type="text" />

        <button>Dodaj</button>
    </form>
  );
};

export default DefineNAT;