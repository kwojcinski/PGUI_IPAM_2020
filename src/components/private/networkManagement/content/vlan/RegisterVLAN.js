import React from "react";
import { useAuth0 } from "../../../../../auth/react-auth0-spa";


const RegisterVLAN = (props) => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    if(data.get('description').length < 3)
      return;

    event.target.reset();
    props.handleSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="description">Opis</label>
        <input id="description" name="description" type="text" required minLength='3'/>
        <input hidden name="owner" defaultValue={user.sub} />
        <button>Dodaj</button>
    </form>
  );
};

export default RegisterVLAN;