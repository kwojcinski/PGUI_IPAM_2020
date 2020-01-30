import React, {Component} from "react";
import './IPNetworkPage.css'

class EditIPForm extends Component {

  state = {
    ip: this.props.ip,
    description: this.props.description,
    vlan: this.props.vlan
  };

  handleChange = (event, field) => {
    this.setState({
      [field]: event.target.value
    });
  };

  render() {
    return (
        <form onSubmit={(event) => this.props.handleSaveEditedRec(event, this.props.id)} style={{marginBottom: "1%"}}>
          <div>
            <div className="showDiv">
              <label htmlFor="ip">IP</label>
              <input className="inputAdd" id="new-ip" name="ip" type="text" value={this.state.ip}
                     onChange={event => this.handleChange(event, 'ip')} required/>
            </div>
            <div className="showDiv">
              <label htmlFor="description">Description</label>
              <input className="inputAdd" id="new-description" name="description" type="text"
                     value={this.state.description}
                     onChange={event => this.handleChange(event, 'description')} required/>
            </div>
            <div className="showDiv">
              <label htmlFor="vlan">VLAN</label>
              <select className="inputAdd" name="vlan" onChange={event => this.handleChange(event, 'vlan')} required
                      defaultValue={this.state.vlan}>
                {this.props.vlans.map(rec =>
                    <option key={rec.id} value={rec.id}>{rec.body.description}</option>
                )}
              </select>
            </div>
          </div>
          <button type='button' onClick={() => this.props.cancel()}>Cancel</button>
          <button type='submit'>Save</button>
        </form>
    );
  };

}

export default EditIPForm;