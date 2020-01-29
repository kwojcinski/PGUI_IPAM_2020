import React, {Component} from 'react';
import RegisterDevice from "./RegisterDevice";
import firebase from "firebase";

class DevicePage extends Component {


  constructor(props) {
    super(props);
    this.database = firebase.database();
  }

  addNewHost = (hostData) => {
    let host = {};
    for (let entry of hostData.entries()) {
      host[entry[0]] = entry[1];
    }
    let key = this.database.ref('/host').push(host).key;
    let result = this.database.ref('host/' + key);
    result.on("value", snap => {
      console.log(snap.val());
    });
  };

  render() {
    return (
        <div>
          <RegisterDevice handleSubmit={this.addNewHost}/>
          <div>Lista dodanych</div>
        </div>
    );
  }

}

export default DevicePage;

