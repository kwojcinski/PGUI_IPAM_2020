import React, { Fragment } from "react";
import { useAuth0 } from "../../../../../auth/react-auth0-spa";
import {Link} from "react-router-dom";
import "./DevicePage.css"

const RegisterDevice = (props) => {
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
      <div class="showDiv">
        <label htmlFor="ip">Adres IP</label>
        <input class="inputAdd" id="ip" name="ip" type="text" />
        </div>
        <div class="showDiv">
        <label htmlFor="name">Nazwa urządzenia</label>
        <input class="inputAdd" id="name" name="name" type="text" />
        </div>
        <div class="showDiv">
        <label htmlFor="description">Opis urządzenia</label>
        <input class="inputAdd" id="description" name="description" type="text" />
        </div>
        <input hidden name="owner" defaultValue={user.sub} />
        <div class="buttonDiv">
        <button>Dodaj</button>
        </div>
    </form>
  );
};

export default RegisterDevice;