var playlist = {Slowdive: 'Alison', MyBloodyValentine: 'Sometimes'};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississipp")

function removeFromPlaylist(artistName, songTitle) {
  delete playlist.Slowdive
  return playlist
}
  