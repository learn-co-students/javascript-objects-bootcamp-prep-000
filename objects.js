var playlist = {
  Radiohead: "OKComputer",
  theBeatles: "Something",
  DrDog: "theTruth"
};

function updatePlaylist (playlist,artist,song) {
  playlist ["artist"] = "song"
  return playlist
}
updatePlaylist(playlist,"Beck","Guero")

function removeFromPlaylist (playlist,artist) {
  delete playlist.artist
  return playlist
}
removeFromPlaylist("DrDog","theTruth")
