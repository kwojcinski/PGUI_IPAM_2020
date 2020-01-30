import React, {Component} from "react";

class EditNATForm extends Component {

  state = {
    name: this.props.name,
    device: this.props.device,
    description: this.props.description,
    externalIP: this.props.externalIP,
    ip: this.props.ip,
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
            <label>Nazwa</label>
            <input name="name" type="text" value={this.state.name}
                   onChange={event => this.handleChange(event, 'name')} required/>

            <label>Urządzenie</label>
            <select name="device" defaultValue={this.state.device} required
                    onChange={event => this.handleChange(event, 'device')}>
              {this.props.devices.map(rec =>
                  <option key={rec.id} value={rec.id}>{rec.body.name}</option>
              )}
            </select>

            <label>Opis</label>
            <input name="description" type="text" value={this.state.description}
                   onChange={event => this.handleChange(event, 'description')} required/>

            <label htmlFor="externalIP">Zewnętrzne IP</label>
            <input name="externalIP" type="text" value={this.state.externalIP}
                   onChange={event => this.handleChange(event, 'externalIP')} required/>

            <label>IP</label>
            <select defaultValue={this.state.ip} required
                    onChange={event => this.handleChange(event, 'ip')}>
              {this.props.ips.map(rec =>
                  <option key={rec.id} value={rec.id}>{rec.body.ip}</option>
              )}
            </select>
          </div>
          <button type='button' onClick={() => this.props.cancel()}>Anuluj</button>
          <button type='submit'>Zapisz</button>
        </form>
    );
  }
};

export default EditNATForm;