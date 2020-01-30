import React from "react";
import { useAuth0 } from "../../../../../auth/react-auth0-spa";


const ImportFromFileBodyComponent = (props) => {
  const { loading, user } = useAuth0();
  let fileReader;

  const handleFileRead = (e) => {
      const content = fileReader.result;
      console.log(content);
  } 

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
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
                accept='.csv'
                onChange={e => handleFileChosen(e.target.files[0])}
                />
                {/* <button onClick={() => console.log(props.data)}>hedasdasdqwsadhe</button> */}
    </div>
  );
};

export default ImportFromFileBodyComponent;