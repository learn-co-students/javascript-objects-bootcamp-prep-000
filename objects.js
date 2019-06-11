let playlist = {
  'Jukebox The Ghost': 'Girl'
}


function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
}
