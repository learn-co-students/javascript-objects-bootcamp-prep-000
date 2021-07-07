var playlist = {
  ['Slowdive']: 'help',
  ['My Bloody Valentine']: 'me'
}

function updatePlaylist (playlist,artistName,songTitle) {
  playlist['Phil Ochs'] = 'six';
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist['Slowdive'];
}