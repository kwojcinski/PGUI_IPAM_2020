import React, {Component} from 'react';
import DefineNAT from "./DefineNAT";
import database from "../../../../../utils/database";

class NATPage extends Component {


  constructor(props) {
    super(props);
    // this.database = firebase.database();
  }

  addNewNAT = (hostData) => {
    let host = {};
    for (let entry of hostData.entries()) {
      host[entry[0]] = entry[1];
    }
    let key = database.ref('/vlan').push(host).key;
    let result = database.ref('vlan/' + key);
    result.on("value", snap => {
      console.log(snap.val());
    });
  };

  render() {
    return (
        <div>
          <DefineNAT handleSubmit={this.addNewNAT}/>
          <div>Lista dodanych</div>
        </div>
    );
  }

}

export default NATPage;

