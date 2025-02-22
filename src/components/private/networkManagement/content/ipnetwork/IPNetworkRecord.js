import React, {Component} from 'react';
import './IPNetworkPage.css'
import EditIPForm from "./EditIPForm";

class IPNetworkRecord extends Component {

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
    let {id, ip, description, vlan, vlans} = this.props;
    let vlanName = vlans.filter(rec => rec.id === vlan)[0];
    vlanName = vlanName === undefined ? 'Brak' : vlanName.body.description;
    return (
        <div className='record'>
          <div style={{paddingTop: '0.5%', paddingBottom: '0.5%'}}>
            <div className="showDiv-ip">{ip}</div>
            <div className="showDiv-ip">{description}</div>
            <div className="showDiv-ip">{vlanName}</div>
            <div className="changes">
              <button onClick={() => this.handleClickAction('edit')}>Edit</button>
              <button onClick={() => this.handleClickAction('delete')}>Delete</button>
            </div>
          </div>
          <div hidden={!this.state.showEdit} className='confirm-frame'>
            <EditIPForm handleSaveEditedRec={this.handleSaveEditedRec}
                        cancel={() => this.handleClickAction('edit')}
                        {...this.props}/>
          </div>
          <div hidden={!this.state.showDeleteConf} className='confirm-frame'>
            <h3 className='delete-confirm'>Are you sure you want to delete?</h3>
            <button onClick={() => this.handleClickAction('delete')}>Cancel</button>
            <button onClick={() => this.props.handleDelete(id)}>Confirm</button>
          </div>
        </div>
    );
  }
}

export default IPNetworkRecord;

