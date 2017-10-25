var playlist = {Beatles: "Come Together", Paramore: "Fake Happy", PATD: "LA Devotee"}

function updatePlaylist(object, artist, song) {
  object[artist] = song
  return object
}

function removeFromPlaylist(object, artist) {
  delete object[artist]
  return object
}
