import React from "react";
import { useAuth0 } from "../../../../../auth/react-auth0-spa";

const DefineNATForm = (props) => {
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
        <select name="device">
            <option value="0">Wybierz urządzenie</option>
            {props.hostData.map(rec =>
                <option key={rec.id} value={rec.id}>{rec.body.name}</option>
            )}
        </select>

        <label htmlFor="description">Opis</label>
        <input id="description" name="description" type="text" />

        <label htmlFor="externalIP">Zewnętrzne IP</label>
        <input id="externalIP" name="externalIP" type="text" />

        <label htmlFor="ip">IP</label>
        <select name="ip">
            <option value="0">Wybierz IP</option>
            {props.ipData.map(rec =>
                <option key={rec.id} value={rec.id}>{rec.body.ip}</option>
            )}
        </select>
        <input hidden name="owner" defaultValue={user.sub} />
        <button>Dodaj</button>
    </form>
  );
};

export default DefineNATForm;