var playlist = {
  JohnWilliams: 'Cantina Band'
}

function updatePlaylist(plist, artist, song) {
    plist[artist] = song
    return plist
}

function removeFromPlaylist(plist, artist) {
  delete plist[artist]
  return plist
}
