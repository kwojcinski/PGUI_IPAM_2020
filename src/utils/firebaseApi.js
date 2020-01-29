import firebase from "firebase";
import * as firebaseHelper from "./firebaseHelper";

//WEB
//docs: https://firebase.google.com/docs/database/web/read-and-write
class FirebaseApi {

  constructor() {
    this.database = firebase.database();
  }

  addTestNewHost = () => {
    let host = {
      ip: 1,
      hostname: '',
      description: '',
      macAddress: '',
      isGate: false,
      owner: '',
      deviceDescription: '',
      physicalLocationDescription: '',
    };
    this.database.ref('/hosts').push(host);
    host.ip = 2;
    this.database.ref('/hosts').push(host);
    host.ip = 3;
    this.database.ref('/hosts').push(host);
  };

}
export default FirebaseApi;





//REST
const getAllHosts = () => {
  let result = fetch(firebaseHelper.hostsUrl);
};

const getHost = id => {
  let result = fetch(firebaseHelper.hostsUrl + '/' + id);
};

const addNewHost = (hostModel) => {
  let result = fetch(firebaseHelper.hostsUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(hostModel),
  });
};

const removeHost = (id) => {
  let result = fetch(firebaseHelper.hostsUrl + id, {
    method: 'DELETE'
  });
};
