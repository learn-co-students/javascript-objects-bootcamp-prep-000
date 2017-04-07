var playlist = {"key":"value"}

function updatePlaylist(obj, key, value){
  obj[key] = value;
  //obj.assign({}, obj, {[key] : value})
  return obj;
}
function removeFromPlaylist(obj, key){
  delete obj[key];
  return obj;
}
