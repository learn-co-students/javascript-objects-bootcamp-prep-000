var playlist = {artist: "song-title"};

function updatePlaylist(obj, key, val){
 obj[key] = val;
 return obj;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
