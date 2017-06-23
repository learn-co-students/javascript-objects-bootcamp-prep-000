var playlist = {bananas: "this is a track title"}

function updatePlaylist(list, artist, track) {
  list[artist] = track
  return list
}

function removeFromPlaylist(list, artistName) {
  delete list[artistName]
  return list
}
