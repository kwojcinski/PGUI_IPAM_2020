import React from "react";
import { useAuth0 } from "../../../../../auth/react-auth0-spa";
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
<<<<<<< HEAD
    <form onSubmit={handleSubmit}  style={{marginBottom: "1%"}}>
      <div class="showDiv">
=======
    <form onSubmit={handleSubmit}>
      <div className="showDiv">
>>>>>>> bcca3cc789d0ff40b2a8734136d79840ad2c971c
        <label htmlFor="ip">Adres IP</label>
        <input className="inputAdd" id="ip" name="ip" type="text" />
        </div>
        <div className="showDiv">
        <label htmlFor="name">Nazwa urządzenia</label>
        <input className="inputAdd" id="name" name="name" type="text" />
        </div>
        <div className="showDiv">
        <label htmlFor="description">Opis urządzenia</label>
        <input className="inputAdd" id="description" name="description" type="text" />
        </div>
        <input hidden name="owner" defaultValue={user.sub} />
        <div className="buttonDiv">
        <button>Dodaj</button>
        </div>
    </form>
  );
};

export default RegisterDevice;