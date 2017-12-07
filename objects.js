var playlist = {Drake: "Hotline Bling", Swift: "Bad Blood", Weeknd: "The Hills"}

function updatePlaylist(playlist, artist, title) {
  playlist[artist] = title
  return(playlist)
}

function removeFromPlaylist (playlist, artist) {
  delete playlist[artist]
  return(playlist)
}