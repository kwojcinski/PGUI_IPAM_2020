import React, {Component} from 'react';
import RegisterDevice from "./RegisterDevice";
import database from "../../../../../utils/database";

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

  componentDidMount() {
    this.updateHostList();
  }

  updateHostList = () => {

    console.info(this.props.user);

    database.ref('host').once('value').then(snap => {
      if (snap.val() != null && snap.val() !== undefined) {
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
    return (
        <div>
          <RegisterDevice handleSubmit={this.addNewHost}/>
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

export default DevicePage;

