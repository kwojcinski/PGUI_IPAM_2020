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
      <div>
        <div>
          <div className="showDiv">{description}</div>
          <div className="showDiv">{owner}</div>
          <div className="changes">
            <button onClick={() => this.handleClickAction('edit')}>edit</button>
            <button onClick={() => this.handleClickAction('delete')}>delete</button>
          </div>
        </div>
        <div hidden={!this.state.showEdit} style={{width: '60%', margin: "auto", backgroundColor: 'grey'}}>
          <EditVLANForm handleSaveEditedRec={this.handleSaveEditedRec}
                        cancel={() => this.handleClickAction('edit')}
                        {...this.props}/>
        </div>
        <div hidden={!this.state.showDeleteConf}
             style={{width: '60%', margin: "auto", backgroundColor: 'grey'}}>
          <button onClick={() => this.handleClickAction('delete')}>Anuluj</button>
          <button onClick={() => this.props.handleDelete(id)}>Potwierdź</button>
        </div>
      </div>
    </>)
  }

}

export default VLANRecord;

