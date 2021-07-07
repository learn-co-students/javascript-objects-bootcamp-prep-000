var playlist = {
  demiLovato: "cool for the summer",
  taylorSwift: "shake it off",
  cardiB: "i like it"
}
function updatePlaylist(playist, name, song) {
  meals[name] = song;
  return playlist;
}
function removeFromPlaylist(playlist, name) {
  delete playlist.name;
  return playlist;
}
