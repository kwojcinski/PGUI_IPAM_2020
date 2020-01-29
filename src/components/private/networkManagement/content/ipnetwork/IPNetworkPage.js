import React, { Fragment } from "react";
import { useAuth0 } from "../../../../../auth/react-auth0-spa";

const IPNetworkPage = () => {
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
<div>TUTAJ LISTA</div>
  );
};

export default IPNetworkPage;