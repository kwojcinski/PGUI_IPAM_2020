import React, { Fragment } from "react";
import { useAuth0 } from "../../../react-auth0-spa";


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
        <label htmlFor="description">Opis</label>
        <input id="description" name="description" type="text" />
        <input hidden name="owner" defaultValue={user.sub}></input>
        <button>Dodaj</button>
    </form>
  );
};

export default RegisterVLAN;