import React, {Component} from 'react';
import DefineNAT from "./DefineNAT";
import firebase from "firebase";

class NATPage extends Component {


  constructor(props) {
    super(props);
    this.database = firebase.database();
    this.state = {
      data: [],
      hostData: [],
      ipData: []
    };
  }

  addNewNAT = (hostData) => {
    let host = {};
    for (let entry of hostData.entries()) {
      host[entry[0]] = entry[1];
    }
    let key = this.database.ref('/nat').push(host).key;
    let result = this.database.ref('nat/' + key);
    result.on("value", snap => {
      this.updateNATlist();
    });
  };
  componentDidMount() {
    this.updateHostlist();
    this.updateIPlist();
    this.updateNATlist();
  }

  
  updateNATlist = () => {
    this.database.ref('nat').once('value').then(snap => {
      if(snap.val() != null && snap.val() != undefined){
      let result = Object.entries(snap.val()).map(el => (
          {id: el[0], body: el[1]}
      ));
      this.setState({
        data: result
      });
    }
    });
  };

  updateHostlist = () => {
    this.database.ref('host').once('value').then(snap => {
      if(snap.val() != null && snap.val() != undefined){
      let result = Object.entries(snap.val()).map(el => (
          {id: el[0], body: el[1]}
      ));
      this.setState({
        hostData: result
      });
    }
    });
  };

  updateIPlist = () => {
    this.database.ref('ip').once('value').then(snap => {
      if(snap.val() != null && snap.val() != undefined){
      let result = Object.entries(snap.val()).map(el => (
          {id: el[0], body: el[1]}
      ));
      this.setState({
        ipData: result
      });
    }
    });
  };

  render() {
    let button;
    if (this.state.hostData.length > 0 && this.state.ipData.length > 0) {
      button = <DefineNAT handleSubmit={this.addNewNAT} ipData={this.state.ipData} hostData={this.state.hostData}/>
    } else {
      button = "";
    }
    return (
        <div>
          {button}
          <div>Lista dodanych</div>
          <ul>
            {this.state.data.map(rec =>
                <li key={rec.id}>{rec.body.name}</li>
            )}
          </ul>
        </div>
    );
  }

}

export default NATPage;

