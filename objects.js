var playlist = {
  BEP: "Pump it"
};
function updatePlaylist(object, key, value){
  object[key] = value
  return object
}
function removeFromPlaylist(object, key, value){
  delete object.Slowdive;
  return object
}
