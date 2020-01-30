import React, {Component} from 'react';
import "./DevicePage.css"
import EditDeviceForm from "./EditDeviceForm";

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
    let data = new FormData(e.target);
    e.target.reset();
    this.props.handleEdit(key, data);
    this.handleClickAction('edit')
  };

  render() {
    let {id, ip, name, description} = this.props;
    return (
        <div className='record'>
          <div style={{marginBottom: '0.5%', paddingTop: '0.5%', paddingBottom: '0.5%'}}>
            <div className="showDiv">{ip}</div>
            <div className="showDiv">{name}</div>
            <div className="showDiv">{description}</div>
            <div className="changes">
              <button onClick={() => this.handleClickAction('edit')}>Edit</button>
              <button onClick={() => this.handleClickAction('delete')}>Delete</button>
            </div>
          </div>
          <div hidden={!this.state.showEdit} style={{width: '60%', margin: "auto", backgroundColor: 'white', borderRadius: '5px'}}>
            <EditDeviceForm handleSaveEditedRec={this.handleSaveEditedRec}
                            cancel={() => this.handleClickAction('edit')}
                            {...this.props}/>
          </div>
          <div hidden={!this.state.showDeleteConf} style={{width: '60%', margin: "auto", backgroundColor: 'white', borderRadius: '5px'}}>
            <button onClick={() => this.handleClickAction('delete')}>Cancel</button>
            <button onClick={() => this.props.handleDelete(id)}>Confirm</button>
          </div>
        </div>
    );
  }
}

export default DeviceRecord;

