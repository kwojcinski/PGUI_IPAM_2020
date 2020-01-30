import React, {Component} from 'react';
import DefineNAT from "./DefineNAT";
import database from "../../../../../utils/database";

class NATPage extends Component {

  constructor(props) {
    super(props);
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
    let key = database.ref('/nat').push(host).key;
    let result = database.ref('nat/' + key);
    result.on("value", snap => {
      this.updateNATlist();
    });
  };

  componentDidMount() {
    this.updateHostlist();
    this.updateIPlist();
    this.updateNATlist();
  }

  // componentWillUnmount(){
  //   this._updateNats;
  //   this._updateHosts.cancel();
  //   this._updateIps.cancel();
  // }

  updateNATlist = () => {
    this._updateNats = database.ref('nat').once('value').then(snap => {
      if(snap.val() != null && snap.val() !== undefined){
        let result = Object.entries(snap.val())
        .filter(el => el[1].owner === this.props.user.sub)
        .map(el => (
                    {id: el[0], body: el[1]}
                ));
      this.setState({
        data: result
      });
    }
    });
  };

  updateHostlist = () => {
    this._updateHosts = database.ref('host').once('value').then(snap => {
      if(snap.val() != null && snap.val() !== undefined){
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

  updateIPlist = () => {
    this._updateIps = database.ref('ip').once('value').then(snap => {
      if(snap.val() != null && snap.val() !== undefined){
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

  render() {
    let button;
    if (this.state.hostData.length > 0 && this.state.ipData.length > 0) {
      button = <DefineNAT handleSubmit={this.addNewNAT} ipData={this.state.ipData} hostData={this.state.hostData}/>
    } else {
      button = <div>Dodaj urządzenia i sieci IP</div>;
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

