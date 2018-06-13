var playlist = {
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes'
}
function updatePlaylist(playlist, artistName, songTitle) {
  var artistName = 'Phil Ochs';
  var songTitle = "Here's to the State of Mississippi";
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, Slowdive) {
  delete playlist[Slowdive];
  return playlist;
}
