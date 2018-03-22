var playlist = {
  artist: 'song'
};

function updatePlaylist(object, key, value) {
 return Object.assign({}, object, {[key]: value});
}

function removeFromPlaylist(object, key){
  delete object[key];
  return object;
}