var playlist = {
  dmb: "#41",
  potsusa: "Peaches",
  ts: "Wildest Dreams"
}
function updatePlaylist (playlist, artist, song) {
  return Object.assign({}, playlist, { [artist]: song })
}
function removeFromPlaylist (playlist, artist) {
  delete playlist[artist]
  return playlist
}