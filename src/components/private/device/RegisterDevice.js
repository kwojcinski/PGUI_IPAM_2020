import React, { Fragment } from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import {Link} from "react-router-dom";

const RegisterDevice = () => {
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
        <label htmlFor="ip">Adres IP</label>
        <input id="ip" name="ip" type="text" />

        <label htmlFor="name">Nazwa urządzenia</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="description">Opis urządzenia</label>
        <input id="description" name="description" type="text" />

        <button>Dodaj</button>
    </form>
  );
};

export default RegisterDevice;