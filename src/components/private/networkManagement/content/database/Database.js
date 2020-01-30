import React from "react";
import {useAuth0} from "../../../../../auth/react-auth0-spa";
import database from "../../../../../utils/database";

const ImportFromFileBodyComponent = (props) => {
  const {loading, user} = useAuth0();
  let fileReader;

  const handleFileRead = (e) => {
    const content = fileReader.result;
    const data = JSON.parse(content);
    data.hosts.map(el => {
      database.ref('/host').child(el.id).set(el.body);
    });
    data.vlans.map(el => {
      database.ref('/vlan').child(el.id).set(el.body);
    });
    data.ips.map(el => {
      database.ref('/ip').child(el.id).set(el.body);
    });
    data.nats.map(el => {
      database.ref('/nat').child(el.id).set(el.body);
    });
    alert('Success!')
  };

  return (
      <div>
        <input type='file'
               id='file'
               accept='.json'
               onChange={e => handleFileChosen(e.target.files[0])}
        />
        <button onClick={handleFileRead}>Import</button>
      </div>
  );
};

export default ImportFromFileBodyComponent;