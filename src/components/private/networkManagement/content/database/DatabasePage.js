import React, {Component} from 'react';
import database from "../../../../../utils/database";
import Database from "./Database"

import { useAuth0 } from "../../../../../auth/react-auth0-spa";

class DatabasePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hostData: [],
      vlanData: [],
      ipData: [],
      natData: []

    };

  }
  handleSaveToPC = jsonData => {
    const fileData1 = JSON.stringify(this.state.hostData);
    const fileData2 = JSON.stringify(this.state.natData);
    const fileData3 = JSON.stringify(this.state.ipData);
    const fileData4 = JSON.stringify(this.state.vlanData);
    const fileData = '{"hosts": ' + fileData1 + ', "nats": ' + fileData2 + ', "ips": ' + fileData3 + ', "vlans": ' + fileData4 + '}'
    const blob = new Blob([fileData], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'filename.json';
    link.href = url;
    link.click();
  }
  componentDidMount() {
    this.updateHostList();
    this.updateIPList();
    this.updateNATList();
    this.updateVLANList();
  }

  updateHostList = () => {

    database.ref('host').once('value').then(snap => {
      if (snap.val() != null && snap.val() !== undefined) {
        let result = Object.entries(snap.val())
        .filter(el => el[1].owner === this.props.user.sub)
        .map(el => (
                    {id: el[0], body: el[1]}
                ));
        this.setState({
          hostData: result
        });
      }
    });
  };

  updateNATList = () => {

    database.ref('nat').once('value').then(snap => {
      if (snap.val() != null && snap.val() !== undefined) {
        let result = Object.entries(snap.val())
        .filter(el => el[1].owner === this.props.user.sub)
        .map(el => (
                    {id: el[0], body: el[1]}
                ));
        this.setState({
          natData: result
        });
      }
    });
  };

  updateIPList = () => {

    database.ref('ip').once('value').then(snap => {
      if (snap.val() != null && snap.val() !== undefined) {
        let result = Object.entries(snap.val())
        .filter(el => el[1].owner === this.props.user.sub)
        .map(el => (
                    {id: el[0], body: el[1]}
                ));
        this.setState({
          ipData: result
        });
      }
    });
  };

  updateVLANList = () => {

    database.ref('vlan').once('value').then(snap => {
      if (snap.val() != null && snap.val() !== undefined) {
        let result = Object.entries(snap.val())
        .filter(el => el[1].owner === this.props.user.sub)
        .map(el => (
                    {id: el[0], body: el[1]}
                ));
        this.setState({
          vlanData: result
        });
      }
    });
  };

  render() {
    return (
        <div className="record">
            <Database />
            <button onClick={this.handleSaveToPC}>Export to file</button>
        </div>
    );
  }

}

export default DatabasePage;

