var playlist = {
  'The Lumineers': 'Ho Hey',
  'CCR': 'Forunate Son',
  'Eminem': 'Slim Shady'
}
function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName]=songTitle;
  return playlist;
}
function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
