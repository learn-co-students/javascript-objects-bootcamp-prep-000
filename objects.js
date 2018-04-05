var playlist = {beatles: "Yesterday", foofighters: "All My Life", gorillaz: "Feel Good Inc."}

function updatePlaylist(playlist, artist, song) {
  return Object.assign(playlist, { [artist]: song })
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
}