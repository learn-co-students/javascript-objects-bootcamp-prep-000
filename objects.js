var playlist = {
  artistName: "",
  songtitle: ""
}

function updatePlaylist(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function removeFromPlaylist(object, artistName){
  var obj = Object.assign({},object);
  delete obj[artistName];
  return obj;
}
