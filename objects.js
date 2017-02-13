var playlist = new Object({
    name: 'song'
});
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist;
}
function removeFromPlaylist(playlist,artistName) {
var playlist = {}
  delete playlist.artistName;
  return playlist;
}
