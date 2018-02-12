var playlist = {
  flume: "thatsong",
  sandwich: "lala"
};

function updatePlaylist(playlist,artistName,songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}