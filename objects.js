
var playlist = new Object({test: "ttt"});

function updatePlaylist(playlist,artistName,songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName]; // object["key"] << if you know what the key is. object[key] << only if you want to use the value of key
  return playlist;
}