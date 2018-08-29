var playlist = {Drake: 'Six God', BlindBoyFuller: 'Shake that Shimmy'}
function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj 
}
function removeFromPlaylist(obj, key) {
  delete obj[key];
  return obj 
}