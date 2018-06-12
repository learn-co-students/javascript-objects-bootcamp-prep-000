var playlist = {
  beatles: "Michelle"
}

function updatePlaylist(aPlaylist, artistName, songTitle) {
  aPlaylist[artistName] = songTitle
  return aPlaylist
}
function removeFromPlaylist(aPlaylist, artistName) {
  delete aPlaylist[artistName]
}