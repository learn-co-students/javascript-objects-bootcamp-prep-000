var playlist = {}
playlist.Beyonce = 'fear' 
playlist['artist'] = 'song' 

 

function updatePlaylist(playlist, artist, song) { 
  playlist[artist]= song 
  return playlist
  
  
}

updatePlaylist(playlist,'Taylor', 'red')
console.log(playlist)

 

function removeFromPlaylist(playlist, artist) { 
  delete playlist[artist]
  return playlist 
  
  
}
removeFromPlaylist(playlist,'Taylor')