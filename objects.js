var playlist = {}
playlist["Fall Out Boy"] = "Last of the Real Ones"

function updatePlaylist(playlist,artist,song){
  playlist[artist] = song
  /* with this structure, the playlist cannot have more than 1 song
  by the same artist */
  return playlist
}

function removeFromPlaylist(playlist,artist){
  delete playlist[artist]
  return playlist
}

