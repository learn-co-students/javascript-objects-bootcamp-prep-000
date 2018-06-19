var playlist = {[ 'Big Sean' : 'Feelings'
  ]: 'songTitle'
};
function updatePlaylist (playlist, artistName, songTitle) {
 Object.assign({}, playlist, {[artistName]:songTitle})
}
function removeFromPlaylist() {
  delete playlist.artistName;
  return playlist;
}
