import React from "react";
import { useAuth0 } from "../../../../../auth/react-auth0-spa";
import "./VLANPage.css"


const RegisterVLANForm = (props) => {
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
    <form className='new-form' onSubmit={handleSubmit} style={{marginBottom: "1%"}}>
      <div className="showDiv">
        <label>Description</label>
        <input className="inputAdd" name="description" type="text" required minLength='3'/>
        </div>
        <input hidden name="owner" defaultValue={user.sub} />
        <div className="buttonDiv">
        <button>Add</button>
        </div>
    </form>
  );
};

export default RegisterVLANForm;