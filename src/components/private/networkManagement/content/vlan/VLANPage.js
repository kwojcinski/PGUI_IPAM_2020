import React, {Component} from 'react';
import database from "../../../../../utils/database";
import RegisterVLANForm from "./RegisterVLANForm";
import VLANRecord from "./VLANRecord";
import './VLANPage.css'


class VLANPage extends Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  addNewVLAN = (hostData) => {
    let host = {};
    for (let entry of hostData.entries()) {
      host[entry[0]] = entry[1];
    }
    database.ref('/vlan').push(host);
    this.updateVLANList();
  };

  componentDidMount() {
    this.updateVLANList();
  }

  editVLAN = (key, hostData) => {
    let host = {};
    for (let entry of hostData.entries()) {
      host[entry[0]] = entry[1];
    }
    console.log(key, host);
    database.ref('/vlan/' + key).update(host).then(
        this.updateVLANList()
    );
  };

  removeVLAN = (key) => {
    database.ref('/vlan/' + key).remove().then(
        this.updateVLANList()
    );
  };

  updateVLANList = () => {
    database.ref('vlan').once('value').then(snap => {
      if (snap.val() !== undefined && snap.val() !== null) {
        let result = Object.entries(snap.val())
            .filter(el => el[1].owner === this.props.user.sub)
            .map(el => (
                {id: el[0], body: el[1]}
            ));
        this.setState({
          data: result
        });
      } else {
        this.setState({
          data: []
        });
      }
    });
  };

  render() {
    if (!this.state.data.length) {
      return <RegisterVLANForm handleSubmit={this.addNewVLAN}/>
    }
    return (
        <div>
          <RegisterVLANForm handleSubmit={this.addNewVLAN}/>
          {
            this.state.data.map(rec =>
                <VLANRecord
                    key={rec.id}
                    id={rec.id}
                    owner={rec.body.owner}
                    description={rec.body.description}
                    handleEdit={this.editVLAN}
                    handleDelete={this.removeVLAN}
                />
            )
          }
        </div>
    );
  }

}

export default VLANPage;

