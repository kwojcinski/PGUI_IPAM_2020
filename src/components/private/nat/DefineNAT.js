import React, { Fragment } from "react";
import { useAuth0 } from "../../../react-auth0-spa";

const DefineNAT = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    // const data = new FormData(event.target);
    
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
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