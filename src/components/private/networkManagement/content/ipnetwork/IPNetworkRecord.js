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
    return (
        <>
          <div>
            <div className="showDiv">{ip}</div>
            <div className="showDiv">{description}</div>
            <div className="showDiv">{vlans.filter(rec => rec.id === vlan)[0].body.description}</div>
            <div className="changes">
              <button onClick={() => this.handleClickAction('edit')}>edit</button>
              <button onClick={() => this.handleClickAction('delete')}>delete</button>
            </div>
          </div>
          <div hidden={!this.state.showEdit} style={{width: '60%', margin: "auto", backgroundColor: 'grey'}}>
            <EditIPForm handleSaveEditedRec={this.handleSaveEditedRec} {...this.props}/>
          </div>
          <div hidden={!this.state.showDeleteConf} style={{width: '60%', margin: "auto", backgroundColor: 'grey'}}>
            <button onClick={() => this.handleClickAction('delete')}>Anuluj</button>
            <button onClick={() => this.props.handleDelete(id)}>Potwierdź</button>
          </div>
        </>
    );
  }
}

export default IPNetworkRecord;

