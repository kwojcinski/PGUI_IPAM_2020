import React, {Component} from 'react';
import RegisterVLAN from "./RegisterVLAN";
import database from "../../../../../utils/database";

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

  updateVLANList = () => {
    database.ref('vlan').once('value').then(snap => {
      let result = Object.entries(snap.val()).map(el => (
          {id: el[0], body: el[1]}
      ));
      this.setState({
        data: result
      });
    });
  };

  render() {
    return (
        <div>
          <RegisterVLAN handleSubmit={this.addNewVLAN}/>
          <div>Lista dodanych</div>
          <ul>
            {this.state.data.map(rec =>
                <li key={rec.id}>{rec.body.description}</li>
            )}
          </ul>
        </div>
    );
  }

}

export default VLANPage;

