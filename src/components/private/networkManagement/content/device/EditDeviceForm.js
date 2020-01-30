import React, {Component} from "react";
import "./DevicePage.css"

class EditDeviceForm extends Component {

  state = {
    ip: this.props.ip,
    name: this.props.name,
    description: this.props.description
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
              <label htmlFor="ip">IP Address</label>
              <input className="inputAdd" id="new-ip" name="ip" type="text" value={this.state.ip}
                     onChange={event => this.handleChange(event, 'ip')} required/>
            </div>
            <div className="showDiv">
              <label htmlFor="name">Host name</label>
              <input className="inputAdd" id="new-name" name="name" type="text" value={this.state.name}
                     onChange={event => this.handleChange(event, 'name')} required/>
            </div>
            <div className="showDiv">
              <label htmlFor="description">Host description</label>
              <input className="inputAdd" id="new-description" name="description" type="text"
                     value={this.state.description}
                     onChange={event => this.handleChange(event, 'description')} required/>
            </div>
          </div>
          <button type='button' onClick={() => this.props.cancel()}>Cancel</button>
          <button type='submit'>Save</button>
        </form>
    );
  };

}

export default EditDeviceForm;