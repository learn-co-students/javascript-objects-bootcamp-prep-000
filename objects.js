var playlist = {
  theNational: 'Mr. November',
  modestMouse: 'Baby Blue Sedan',
  theXX: 'Shelter'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
}