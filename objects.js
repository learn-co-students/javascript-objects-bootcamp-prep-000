var playlist = {} 
playlist.Queen = 'Innuendo' 
playlist['Led Zeppelin'] = 'Black Dog' 

 

function updatePlaylist(playlist, artist, song) { 
  playlist[artist]= song 
  return playlist
}

function removeFromPlaylist(playlist, artist) { 
  delete playlist[artist]
  return playlist
}

