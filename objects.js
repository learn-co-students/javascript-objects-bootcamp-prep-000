var playlist = {
  sonia: 'Where are you?',
  diana: 'I am lost'
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'songTitle';
  return playlist;
}
function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
