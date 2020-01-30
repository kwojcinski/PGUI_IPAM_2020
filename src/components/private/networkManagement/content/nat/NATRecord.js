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
        <div>
          <div>
            <div className="showDiv">{name}</div>
            <div className="showDiv">{devName}</div>
            <div className="showDiv">{description}</div>
            <div className="showDiv">{externalIP}</div>
            <div className="showDiv">{ipName}</div>
            <div className="changes">
              <button onClick={() => this.handleClickAction('edit')}>edit</button>
              <button onClick={() => this.handleClickAction('delete')}>delete</button>
            </div>
          </div>
          <div hidden={!this.state.showEdit} style={{width: '60%', margin: "auto", backgroundColor: 'grey'}}>
            <EditNATForm handleSaveEditedRec={this.handleSaveEditedRec} {...this.props}/>
          </div>
          <div hidden={!this.state.showDeleteConf}
               style={{width: '60%', margin: "auto", backgroundColor: 'grey'}}>
            <button onClick={() => this.handleClickAction('delete')}>Anuluj</button>
            <button onClick={() => this.props.handleDelete(id)}>Potwierdź</button>
          </div>
        </div>
    )
  }

}

export default NATRecord;

