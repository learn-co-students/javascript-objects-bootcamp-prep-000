var playlist = {
  blink182: "dammit",
  newFoundGlory: "hitormiss",
  takingBackSunday: "tellallyourfriends"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
