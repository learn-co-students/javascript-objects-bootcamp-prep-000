var playlist = { U2: 'Beautiful Day'}

function updatePlaylist(playlist, artist, song) {
  
  playlist[artist] = song;
  return playlist;
}

 function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
