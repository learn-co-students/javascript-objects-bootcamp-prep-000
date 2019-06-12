var playlist = {"Gym Class Heroes": "Cupid's Chokehold"}


function updatePlaylist(playlist,artist,song){
  playlist[artist] = song
  return playlist
  
}

function removeFromPlaylist(playlist, artistName){
  
  delete playlist[artistName]
	return playlist
}