
import React, { Fragment } from "react";
import { useAuth0 } from "../../../../../react-auth0-spa";

class IPNetworkPage extends Component {


  constructor(props) {
    super(props);
    this.database = firebase.database();
    this.state = {
      data: [],
      vlanData: []
    };
  }

  addNewIP = (hostData) => {
    let host = {};
    for (let entry of hostData.entries()) {
      host[entry[0]] = entry[1];
    }
    let key = this.database.ref('/ip').push(host).key;
    let result = this.database.ref('ip/' + key);
    result.on("value", snap => {
      this.updateIPlist();
    });
  };
  componentDidMount() {
    this.updateVLANlist();
    this.updateIPlist();
  }

  updateVLANlist = () => {
    this.database.ref('vlan').once('value').then(snap => {
      if(snap.val() != null && snap.val() != undefined){
      let result = Object.entries(snap.val()).map(el => (
          {id: el[0], body: el[1]}
      ));
      this.setState({
        vlanData: result
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
        data: result
      });
    }
    });
  };

  render() {
    let button;
    if (this.state.vlanData.length > 0) {
      button = <RegisterIP handleSubmit={this.addNewIP} data={this.state.vlanData}/>
    } else {
      button = "";
    }
    return (
        <div>
          {button}
          <div>Lista dodanych</div>
          <ul>
            {this.state.data.map(rec =>
                <li key={rec.id}>{rec.body.ip}</li>
            )}
          </ul>
        </div>
    );
  }

}

export default IPNetworkPage;

