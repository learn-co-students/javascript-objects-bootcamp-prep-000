var playlist = {"Dave East": "Rover 2.0 Remix"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName] : songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return Object.assign(playlist, {["Alison"] : "Slowdive"});
}