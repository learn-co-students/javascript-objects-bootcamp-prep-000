var playlist = {prince:"Purple Rain",
                drake: "Gods Plan",
                laurenHill:"Zion"
}

function updatePlaylist(playlist, name, song) {
  playlist[name] = song
  return playlist
}

function removeFromPlaylist (playlist, name) {
  delete playlist[name]
   return playlist
}