var playlist = {
  metallica: "One",
  muse: "Uprising",
  megadeth: "Symphony of Destruction"
}

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[artist]: song})
}

function removeFromPlaylist(list, artist) {
  delete list[artist]
  return list
}
