import React, {Component} from "react";
import RegisterIPForm from "./RegisterIPForm"
import database from "../../../../../utils/database";
import IPNetworkRecord from "./IPNetworkRecord";
import './IPNetworkPage.css'

class IPNetworkPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      vlanData: [],
      vlanSynchronised: false
    };
  }

  addNewIP = (ipData) => {
    let ip = {};
    for (let entry of ipData.entries()) {
      ip[entry[0]] = entry[1];
    }
    this.setState(() => ({
      vlanSynchronised: false,
    }));
    let key = database.ref('/ip').push(ip).key;
    let result = database.ref('ip/' + key);
    result.on("value", snap => {
      this.updateIPlist();
    });
  };

  editIP = (key, ipData) => {
    let ip = {};
    for (let entry of ipData.entries()) {
      ip[entry[0]] = entry[1];
    }
    this.setState(() => ({
      vlanSynchronised: false,
    }));
    database.ref('/ip/' + key).update(ip).then(() => {
          this.updateVLANlist();
          this.updateIPlist();
        }
    );
  };

  removeIP = (key) => {
    this.setState(() => ({
      vlanSynchronised: false,
    }));
    database.ref('/ip/' + key).remove().then(() => {
      this.updateVLANlist();
      this.updateIPlist();
    });
  };

  componentDidMount() {
    this.updateVLANlist();
    this.updateIPlist();
  }

  updateVLANlist = () => {
    database.ref('vlan').once('value').then(snap => {
      if (snap.val() != null && snap.val() !== undefined) {
        let result = Object.entries(snap.val())
            .filter(el => el[1].owner === this.props.user.sub)
            .map(el => (
                {id: el[0], body: el[1]}
            ));

        this.setState({
          vlanData: result,
          vlanSynchronised: true,
        });
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
        this.setState({
          data: result
        });
      }
    });
  };

  render() {
    return (
        <div className='ip-page'>
          {
            this.state.vlanData.length > 0 ? (
                <>
                  <RegisterIPForm handleSubmit={this.addNewIP} data={this.state.vlanData}/>
                  {
                    this.state.data.map(rec =>
                        <IPNetworkRecord
                            key={rec.id}
                            id={rec.id}
                            ip={rec.body.ip}
                            description={rec.body.description}
                            vlan={rec.body.vlan}
                            vlans={this.state.vlanData}
                            handleEdit={this.editIP}
                            handleDelete={this.removeIP}
                        />
                    )
                  }
                </>
            ) : (
                <div className='record'>
                  <span>To add IP network you have to define VLAN first.</span>
                </div>
            )
          }
        </div>
    );
  }

}

export default IPNetworkPage;