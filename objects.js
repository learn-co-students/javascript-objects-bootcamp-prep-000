var playlist = {Slowdive: 'Alison', MyBloodyValentine: 'Sometimes'};
function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississipp")

function removeFromPlaylist(key, value) {
  delete playlist.Slowdive
  return playlist
}
  