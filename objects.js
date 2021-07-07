var playlist = {
  artist: '',
  song: ''
}


// updated my playlist to have eminem as the artist
// and the song as phenomenal
function updatePlaylist(playlist, artist, song) {
  playlist[artist] = 'eminem';
  playlist[song] = 'phenomenal';
  return playlist
}

// removed the artist from my playlist
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist
}