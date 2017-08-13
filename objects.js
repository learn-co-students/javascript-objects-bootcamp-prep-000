var playlist = {
  Beck: "Dreams",
  Haim: "Falling",
  Chromeo: "Night by Night",
  Kayne: "Gold Digger"
}
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
