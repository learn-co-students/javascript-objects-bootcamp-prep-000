var playlist = {
  "Arianna Grande" : "Break Free",
  "Zedd" : "Clarity",
  "Cash Cash" : "Surrender"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({},playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
