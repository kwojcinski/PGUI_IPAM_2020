import './firebaseHelper'

//Klasa
const getAllHosts = () => {
  let result = fetch(hostsUrl);
};

const getHost = id => {
  let result = fetch(hostsUrl + '/' + id);
};

const addNewHost = (hostModel) => {
  let result = fetch(hostsUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(hostModel),
  });
};

const removeHost = (id) => {
  let result = fetch(hostsUrl + id, {
    method: 'DELETE'
  });
};
