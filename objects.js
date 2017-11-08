var playlist = { Rockstar: "Nickleback", ThreeDoorsDown: "Its Not My Time", Marron5: "She will be loved" };

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}
function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
}
