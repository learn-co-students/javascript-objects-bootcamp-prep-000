var playlist = { 
  Drake: 'Jumpman',
  Eminem: 'Without Me'
}

function updatePlaylist(playlist, artist, title) {
  return Object.assign(playlist, {[artist]: title});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}