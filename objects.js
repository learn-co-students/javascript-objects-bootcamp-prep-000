var playlist = {artist: "song"};

function updatePlaylist(obj, key, value){
  return Object.assign(obj, {[key]: value});
  //playlist = x;
  //return playlist;
}

function removeFromPlaylist(obj, key){
  var artist = key;
  delete obj[key];
  return obj;
}
  