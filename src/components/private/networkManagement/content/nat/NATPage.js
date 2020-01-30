import React, {Component} from 'react';
import DefineNATForm from "./DefineNATForm";
import database from "../../../../../utils/database";
import NATRecord from "./NATRecord";

class NATPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hostData: [],
      ipData: [],
      synchronisedDevices: false,
      synchronisedIps: false
    };
  }

  addNewNAT = (NATData) => {
    let NAT = {};
    for (let entry of NATData.entries()) {
      NAT[entry[0]] = entry[1];
    }
    this.setState(() => ({
      synchronisedDevices: false,
      synchronisedIps: false
    }));
    let key = database.ref('/nat').push(NAT).key;
    let result = database.ref('nat/' + key);
    result.on("value", snap => {
      this.updateNATlist();
      this.updateIPlist();
      this.updateHostlist();
    });
  };

  editNAT = (key, NATData) => {
    let NAT = {};
    for (let entry of NATData.entries()) {
      NAT[entry[0]] = entry[1];
    }
    this.setState(() => ({
      synchronisedDevices: false,
      synchronisedIps: false
    }));
    database.ref('/nat/' + key).update(NAT).then(() => {
          this.updateNATlist();
          this.updateIPlist();
          this.updateHostlist();
        }
    );
  };

  removeNAT = (key) => {
    this.setState(() => ({
      synchronisedDevices: false,
      synchronisedIps: false
    }));
    database.ref('/nat/' + key).remove().then(() => {
      this.updateNATlist();
      this.updateIPlist();
      this.updateHostlist();
    });
  };

  componentDidMount() {
    this.updateNATlist();
    this.updateIPlist();
    this.updateHostlist();
  }

  updateNATlist = () => {
    database.ref('nat').once('value').then(snap => {
      if (snap.val() != null && snap.val() !== undefined) {
        let result = Object.entries(snap.val())
            .filter(el => el[1].owner === this.props.user.sub)
            .map(el => (
                {id: el[0], body: el[1]}
            ));
        this.setState({
          data: result,
        });
      }
    });
  };

  updateHostlist = () => {
    database.ref('host').once('value').then(snap => {
      if (snap.val() != null && snap.val() !== undefined) {
        let result = Object.entries(snap.val())
            .filter(el => el[1].owner === this.props.user.sub)
            .map(el => (
                {id: el[0], body: el[1]}
            ));
        this.setState(() => ({
          hostData: result,
          synchronisedDevices: true
        }));
      }
    });
  };

  updateIPlist = () => {
    database.ref('ip').once('value').then(snap => {
      if (snap.val() != null && snap.val() !== undefined) {
        let result = Object.entries(snap.val())
            .filter(el => el[1].owner === this.props.user.sub)
            .map(el => (
                {id: el[0], body: el[1]}
            ));
        this.setState(() => ({
          ipData: result,
          synchronisedIps: true
        }));
      }
    });
  };

  render() {
    return (this.state.synchronisedIps && this.state.synchronisedDevices && this.state.hostData.length && this.state.ipData.length) ? (
        <div>
          <DefineNATForm handleSubmit={this.addNewNAT} ipData={this.state.ipData} hostData={this.state.hostData}/>
          {this.state.data.map(rec =>
              <NATRecord
                  key={rec.id}
                  id={rec.id}
                  name={rec.body.name}
                  device={rec.body.device}
                  devices={this.state.hostData}
                  description={rec.body.description}
                  externalIP={rec.body.externalIP}
                  ip={rec.body.ip}
                  ips={this.state.ipData}
                  handleEdit={this.editNAT}
                  handleDelete={this.removeNAT}
              />)}
        </div>
    ) : (
        <div>
          <span>Aby dodać sieć IP musisz wcześniej dodać urządzenia i sieci IP</span>
        </div>
    );
  }

}

export default NATPage;

