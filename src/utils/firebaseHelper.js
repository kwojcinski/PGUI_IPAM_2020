export const firebaseConfig = {
  apiKey: "AIzaSyDfm2Q1s1Hzjot8cpCk8BjhmTAvj8CFL-E",
  authDomain: "ipam-f20dc.firebaseapp.com",
  databaseURL: "https://ipam-f20dc.firebaseio.com",
  projectId: "ipam-f20dc",
  storageBucket: "ipam-f20dc.appspot.com",
  messagingSenderId: "192763837762",
  appId: "1:192763837762:web:6610c2a4cb7e8cef0f5cdb"
};

export const dbUrl = "https://ipam-f20dc.firebaseio.com/";

export const natAdaptersUrl = dbUrl + 'nat';
export const netAdapterModel = {
  name: '',
  hostModel: {},
  description: '',
  vlanNetworkModel: {},
  owner: ''
};

export const hostsUrl = dbUrl + 'hosts';
export const hostModel = {
  ip: '',
  hostname: '',
  description: '',
  macAddress: '',
  owner: ''
};

export const ipNetworksUrl = dbUrl + 'ips';
export const ipNetworkModel = {
  network: '',
  mask: '',
  description: '',
  vlanNetworkModel: {},
  locationModel: {},
  owner: ''
};

export const locationsUrl = dbUrl + 'locations';
export const locationModel = {
  location: '',
  description: '',
  owner: ''
};

export const vlanNetworksUrl = dbUrl + 'vlan';
export const vlanNetworkModel = {
  identity: '',
  description: '',
  ipNetworkModels: [{}],
  owner: ''
};

