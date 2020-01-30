import React from "react";
import { useAuth0 } from "../../../../../auth/react-auth0-spa";
import database from "../../../../../utils/database";

const ImportFromFileBodyComponent = (props) => {
  const { loading, user } = useAuth0();
  let fileReader;

  const handleFileRead = (e) => {
      const content = fileReader.result;
      const data = JSON.parse(content)
      data.hosts.map(el => {
        database.ref('/host').child(el.id).set(el.body);
      })
      data.vlans.map(el => {
        database.ref('/vlan').child(el.id).set(el.body);
      })
      data.ips.map(el => {
        database.ref('/ip').child(el.id).set(el.body);
      })
      data.nats.map(el => {
        database.ref('/nat').child(el.id).set(el.body);
      })
      alert('Udało się!')
  } 

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    // fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  const handleSaveToPC = jsonData => {
      console.log(jsonData);
    // const fileData = JSON.stringify({foo: true});
    // const blob = new Blob([fileData], {type: "text/plain"});
    // const url = URL.createObjectURL(blob);
    // const link = document.createElement('a');
    // link.download = 'filename.json';
    // link.href = url;
    // link.click();
  }

  return (
    <div>
        <input type='file'
                id='file'
                accept='.json'
                onChange={e => handleFileChosen(e.target.files[0])}
                />
                <button onClick={handleFileRead}>Importuj</button>
    </div>
  );
};

export default ImportFromFileBodyComponent;