var playlist = {}

function updatePlaylist(playlist, artist, song){
  return playlist[artist] = song;
}
function removeFromPlaylist(playlist, artist, song){
  delete playlist[artist] = song;
  return playlist;
}
