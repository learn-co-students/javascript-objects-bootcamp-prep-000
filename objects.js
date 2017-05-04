var playlist = {
  'Van Morrison': ['Brown Eyed Girl', 'Astral Weeks'],
  'Van Halen': 'Eruption',
  'Stevie Nicks': 'Edge of Seventeen'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist
}


function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
