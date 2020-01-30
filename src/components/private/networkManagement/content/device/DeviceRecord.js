import React, {Component} from 'react';
import "./DeviceRecord.css"

class DeviceRecord extends Component {

  state = {
    showEdit: false,
    showDeleteConf: false
  };

  handleClickAction = (field) => {
    let {showEdit, showDeleteConf} = this.state;
    if (field === 'edit') {
      showEdit = !showEdit;
      showDeleteConf = false;
    } else if (field === 'delete') {
      showDeleteConf = !showDeleteConf;
      showEdit = false;
    }
    this.setState({
      showEdit,
      showDeleteConf
    })
  };

  handleSaveEditedRec = (e, key) => {
    e.preventDefault();
    this.props.hadnleEdit(key, new FormData(e.target));
  };

  render() {
    return (
        <>
          <div>
            <div className="showDiv">{this.props.ip}</div>
            <div className="showDiv">{this.props.name}</div>
            <div className="showDiv">{this.props.description}</div>
            <div className="changes">
              <button onClick={() => this.handleClickAction('edit')}>edit</button>
              <button onClick={() => this.handleClickAction('delete')}>delete</button>
            </div>
          </div>
          <div hidden={!this.state.showEdit} style={{width: '60%', margin: "auto", backgroundColor: 'grey'}}>
            <form onSubmit={(event) => this.handleSaveEditedRec(event, this.props.id)} style={{marginBottom: "1%"}}>
              <div>
                <div className="showDiv">
                  <label htmlFor="ip">Adres IP</label>
                  <input className="inputAdd" id="new-ip" name="ip" type="text" required/>
                </div>
                <div className="showDiv">
                  <label htmlFor="name">Nazwa urządzenia</label>
                  <input className="inputAdd" id="new-name" name="name" type="text" required/>
                </div>
                <div className="showDiv">
                  <label htmlFor="description">Opis urządzenia</label>
                  <input className="inputAdd" id="new-description" name="description" type="text" required/>
                </div>
              </div>
              <button type='button' onClick={() => this.handleClickAction('edit')}>Anuluj</button>
              <button type='submit'>Zapisz</button>
            </form>
          </div>
          <div hidden={!this.state.showDeleteConf} style={{width: '60%', margin: "auto", backgroundColor: 'grey'}}>
            <button onClick={() => this.handleClickAction('delete')}>Anuluj</button>
            <button onClick={() => this.props.handleDelete(this.props.id)}>Potwierdź</button>
          </div>
        </>
    );
  }
}

export default DeviceRecord;

