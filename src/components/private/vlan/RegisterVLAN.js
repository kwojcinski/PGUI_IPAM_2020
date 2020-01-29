import React, { Fragment } from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import firebase from "firebase";


const RegisterVLAN = (props) => {
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
        <label htmlFor="id">ID</label>
        <input id="id" name="id" type="text" />

        <label htmlFor="description">Opis</label>
        <input id="description" name="description" type="text" />

        <button>Dodaj</button>
    </form>
  );
};

export default RegisterVLAN;