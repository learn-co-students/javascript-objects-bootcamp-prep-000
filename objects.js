

var playlist = { Bowie: "Heroes" }

function updatePlaylist(list, newArtist, newSong) {
  list[newArtist] = newSong
  return list
}

function removeFromPlaylist(list, artist) {
  delete list[artist]
  return list
}
