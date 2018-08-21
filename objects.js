var playlist = {
  Slowdive: "Alison",
  'My Bloody Valentine': "Sometimes"
}
function updatePlaylist(playlist) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
  return playlist
}
function removeFromPlaylist(playlist, Slowdive) {
  delete playlist.Slowdive;
  return playlist
}