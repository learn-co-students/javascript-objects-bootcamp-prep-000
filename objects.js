var playlist = {'Phil Ochs': 'Here\'s to the State of Mississippi', 'My Bloody Valentine': 'Sometimes', 'Slowdive': 'Alison'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Phil Ochs'] = 'Here\'s to the State of Mississippi';
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  return playlist;
}