var playlist = { 'Phil Ochs': "Here's to the State of Mississippi" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Slowdive'] = 'Alison';
  playlist['My Bloody Valentine'] = 'Sometimes';
  return playlist;
}

function removeFromPlaylist( playlist, artistName) {
  delete playlist.Slowdive;
  return playlist;
}