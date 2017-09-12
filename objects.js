var playlist = {artist_name1: 'LaLa' };

function updatePlaylist(obj,key,value){
  return Object.assign({}, obj, { [key]: value })
}

function removeFromPlaylist(obj,key){
  delete obj[key];
  return obj;
}
