var playlist = { LadyGaga: "Born This Way" };

function updatePlaylist(plist, artist, song) {
  plist[artist] = song
  return plist
}

function removeFromPlaylist(plist, artistName) {
  delete plist[artistName]
  return plist
}