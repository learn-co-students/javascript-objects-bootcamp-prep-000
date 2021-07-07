var playlist = {Yomo: 'Descara', 
  Yomil: 'Amanece'
}


function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}


