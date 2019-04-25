var playlist = {
  Radiohead: "Fake Plastic Trees"
}

function updatePlaylist(dict, artist, song) {
  dict[artist] = song
  return dict
}

function removeFromPlaylist(dict, artist) {
  delete dict[artist]
  return dict
}
