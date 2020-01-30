import React, {Component} from 'react';
import './NATPage.css'
import EditNATForm from "./EditNATForm";

class NATRecord extends Component {

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
    let {id, name, device, devices, description, externalIP, ip, ips} = this.props;
    let devName = devices.filter(rec => rec.id === device)[0];
    devName = devName === undefined ? 'Brak' : devName.body.name;
    let ipName = ips.filter(rec => rec.id === ip)[0];
    ipName = ipName === undefined ? 'Brak' : ipName.body.ip;
    return (
        <div className='record'>
          <div style={{paddingTop: '0.5%', paddingBottom: '0.5%'}}>
            <div className="showNatDiv">{name}</div>
            <div className="showNatDiv">{devName}</div>
            <div className="showNatDiv">{description}</div>
            <div className="showNatDiv">{externalIP}</div>
            <div className="showNatDiv">{ipName}</div>
            <div className="changes">
              <button onClick={() => this.handleClickAction('edit')}>Edit</button>
              <button onClick={() => this.handleClickAction('delete')}>Delete</button>
            </div>
          </div>
          <div hidden={!this.state.showEdit} className='confirm-frame'>
            <EditNATForm handleSaveEditedRec={this.handleSaveEditedRec}
                         cancel={() => this.handleClickAction('edit')}
                         {...this.props}/>
          </div>
          <div hidden={!this.state.showDeleteConf} className='confirm-frame'>
            <h3 className='delete-confirm'>Are you sure you want to delete?</h3>
            <button onClick={() => this.handleClickAction('delete')}>Cancel</button>
            <button onClick={() => this.props.handleDelete(id)}>Confirm</button>
          </div>
        </div>
    )
  }

}

export default NATRecord;

