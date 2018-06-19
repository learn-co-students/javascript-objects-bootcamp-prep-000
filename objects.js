var playlist = {[
  artistName]: 'songTitle'
};
function updatePlaylist (playlist, artistName, songTitle) {
 Object.assign({}, playlist, {[artistName]:songTitle})
}
function removeFromPlaylist() {
  delete playlist.artistName;
  return playlist;
}
