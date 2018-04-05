var playlist = { dessa: `Dixon's Girl` }

function updatePlaylist(targetPlaylist, artist, song) {
  return (targetPlaylist[artist] = song)
}

function removeFromPlaylist(targetPlaylist, artist, song) {
  return (delete targetPlaylist[artist])
}