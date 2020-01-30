import React, {Component} from 'react';
import RegisterDevice from "./RegisterDevice";
import database from "../../../../../utils/database";
<<<<<<< HEAD
import { useAuth0 } from "../../../../../auth/react-auth0-spa";
import "./DevicePage.css"
=======
import {useAuth0} from "../../../../../auth/react-auth0-spa";
>>>>>>> b186a77cb236c12dd95e655f97db87aadd26ad41

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
        let result = Object.entries(snap.val()).map(el => {
          if(el[1].owner !== "")
            return {id: el[0], body: el[1]}
        });
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
            {this.state.data.map(rec =>
            <div>
                <div class="showDiv" key={rec.id}>{rec.body.ip}</div>
                <div class="showDiv" key={rec.id}>{rec.body.name}</div>
                <div class="showDiv" key={rec.id}>{rec.body.description}</div>
                <div class="changes">Zmiany</div>
                </div>
            )}
        </div>
    );
  }

}

export default DevicePage;

