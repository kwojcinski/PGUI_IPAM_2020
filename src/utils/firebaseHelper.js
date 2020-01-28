dbUrl = "https://ipam-f20dc.firebaseio.com/";

natAdaptersUrl = dbUrl + 'nat';
netAdapterModel = {
  name: '',
  hostModel,
  description: '',
  externalIp: '',
  vlanNetworkModel
};

hostsUrl = dbUrl + 'hosts';
hostModel = {
  ip: '',
  hostname: '',
  description: '',
  macAddress: '',
  isGate: false,
  owner: '',
  deviceDescription: '',
  physicalLocationDescription: '',
};

ipNetworksUrl = dbUrl + 'ips';
ipNetworkModel = {
  network: '',
  mask: '',
  description: '',
  vlanNetworkModel: vlanNetworkModel,
  serversName: '',
  locationModel: locationModel,
  routable: false,
  publicTrueDmzFalse: true,
  dynamicTrueStaticFalse: true
};

locationsUrl = dbUrl + 'locations';
locationModel = {
  location: '',
  description: ''
};

vlanNetworksUrl = dbUrl + 'vlan';
vlanNetworkModel = {
  identity: '',
  description: '',
  ipNetworkModels: [ipNetworkModel]
};

