var playlist = {
  bjork: 'oh so quiet'
}

function updatePlaylist(plist, artist, song) {
  plist[artist] = song
  return plist
}

function removeFromPlaylist (plist, artist) {
  delete plist[artist]
  return plist
}
