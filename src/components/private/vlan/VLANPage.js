import React, {Component} from 'react';
import RegisterVLAN from "./RegisterVLAN";
import firebase from "firebase";

class VLANPage extends Component {


  constructor(props) {
    super(props);
    this.database = firebase.database();
  }

  addNewVLAN = (hostData) => {
    let host = {};
    for (let entry of hostData.entries()) {
      host[entry[0]] = entry[1];
    }
    let key = this.database.ref('/vlan').push(host).key;
    let result = this.database.ref('vlan/' + key);
    result.on("value", snap => {
      console.log(snap.val());
    });
  };

  render() {
    return (
        <div>
          <RegisterVLAN handleSubmit={this.addNewVLAN}/>
          <div>Lista dodanych</div>
        </div>
    );
  }

}

export default VLANPage;

