import React, {Component} from 'react';
import RegisterDeviceForm from "./RegisterDeviceForm";
import database from "../../../../../utils/database";

import "./DevicePage.css"
import DeviceRecord from "./DeviceRecord";

class DevicePage extends Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  addNewHost = (hostData) => {
    let host = {};
    for (let entry of hostData.entries()) {
      host[entry[0]] = entry[1];
    }
    database.ref('/host').push(host);
    this.updateHostList();
  };

  editHost = (key, hostData) => {
    let host = {};
    for (let entry of hostData.entries()) {
      host[entry[0]] = entry[1];
    }
    database.ref('/host/' + key).update(host).then(
      this.updateHostList()
    );
  };

  removeHost = (key) => {
    database.ref('/host/' + key).remove().then(
        this.updateHostList()
    );
  };

  componentDidMount() {
    this.updateHostList();
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
          data: result
        });
      }
    });
  };

  render() {
    return (
        <div>
          <RegisterDeviceForm handleSubmit={this.addNewHost}/>
          {
            this.state.data.map(rec =>
                <DeviceRecord
                    key={rec.id}
                    id={rec.id}
                    ip={rec.body.ip}
                    name={rec.body.name}
                    description={rec.body.description}
                    handleEdit={this.editHost}
                    handleDelete={this.removeHost}
                />
            )
          }
        </div>
    );
  }

}

export default DevicePage;

