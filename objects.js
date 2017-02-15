var playlist = {
  Eminem: "Stan",
  theBeatles: "A Day In the Life",
  theStrokes: "Reptilia"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
