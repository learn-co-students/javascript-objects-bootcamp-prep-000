var playlist = {
  MyBloodyValentine : "Sometimes",
  PhilOchs : "Here's to the State of Mississippi",
  Slowdive : "Alison"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist
}