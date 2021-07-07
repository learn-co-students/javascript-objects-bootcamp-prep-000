var playlist = new Object ({Beyonce: "Formation"});

function updatePlaylist (obj , artistName, songTitle) {
  return Object.assign(obj, { [artistName]: songTitle});
}

function removeFromPlaylist (playlist , artistName) {
  delete playlist[artistName];
  return playlist;
}