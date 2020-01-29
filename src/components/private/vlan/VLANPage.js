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

   getVLANelements = () => {
    return this.database.ref('vlan').once('value').then(snap => {
      let result = Object.entries(snap.val()).map(el => <li key={el[0]}>{el[1].description}</li>);
      console.log(result);
      return result
    });
  };

  render() {
    return (
        <div>
          <RegisterVLAN handleSubmit={this.addNewVLAN}/>
          <div>Lista dodanych</div>
          <ul>
            {this.getVLANelements().then( e => e)}
          </ul>
        </div>
    );
  }

}

export default VLANPage;

