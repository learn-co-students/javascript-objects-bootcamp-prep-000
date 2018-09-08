var playlist = {adele: "send my love"}

function updatePlaylist(playlist, artist, title) {
  playlist[artist] = title
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
}