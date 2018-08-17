var playlist = {
  Yiruma: "Kiss the Rain",
  ATB: "Ecstasy",
  LilWayne: "President Carter"
}

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
}