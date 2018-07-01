var playlist = {sunday: "Test"}

function updatePlaylist(tempPlaylist, artist, song) {
  tempPlaylist[artist] = song;
  return tempPlaylist
}

function removeFromPlaylist(tempPlaylist, artist) {
  delete tempPlaylist[artist]
  return tempPlaylist
}