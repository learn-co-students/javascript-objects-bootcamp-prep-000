var playlist = {
adele: "hello"}

function updatePlaylist(obj, key, value) {
  obj[key] = value
return obj
}
updatePlaylist(playlist, "Madonna", "Vogue")
playlist

function removeFromPlaylist(playlist, Kanye) {
  delete playlist.Kanye
  return playlist
}
