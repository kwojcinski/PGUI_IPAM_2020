import React, {Component} from 'react';
import EditVLANForm from "./EditVLANForm";
import './VLANPage.css'

class VLANRecord extends Component {

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
    let {id, description, owner} = this.props;
    return (<>
      <div className='record'>
        <div style={{marginBottom: '0.5%', paddingTop: '0.5%', paddingBottom: '0.5%'}}>
          <div className="showDiv">{description}</div>
          <div className="changes">
            <button onClick={() => this.handleClickAction('edit')}>Edit</button>
            <button onClick={() => this.handleClickAction('delete')}>Delete</button>
          </div>
        </div>
        <div hidden={!this.state.showEdit} className='confirm-frame'>
          <EditVLANForm handleSaveEditedRec={this.handleSaveEditedRec}
                        cancel={() => this.handleClickAction('edit')}
                        {...this.props}/>
        </div>
        <div hidden={!this.state.showDeleteConf} className='confirm-frame'>
          <h3 className='delete-confirm'>Are you sure you want to delete?</h3>
          <button onClick={() => this.handleClickAction('delete')}>Cancel</button>
          <button onClick={() => this.props.handleDelete(id)}>Confirm</button>
        </div>
      </div>
    </>)
  }

}

export default VLANRecord;

