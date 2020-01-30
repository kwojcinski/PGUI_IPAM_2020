import React, {Component} from "react";
import './VLANPage.css'

class EditVLANForm extends Component {

  state = {
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
            <label>Opis</label>
            <input className="inputAdd" name="description" type="text" required value={this.state.description}
                   onChange={event => this.handleChange(event, 'description')} minLength='3' />
                   </div>
          </div>
          <button type='button' onClick={() => this.props.cancel()}>Cancel</button>
          <button type='submit'>Save</button>
        </form>);
  }

}

export default EditVLANForm;