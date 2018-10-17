var playlist = {
  artist: "song titles"
}

function updatePlaylist(playlist, artistName, songTitle){
	playlist[artistName] = songTitle
	return playlist
}
updatePlaylist("why", "the heck", "not")

function removeFromPlaylist(playlist, artistName){
	delete playlist[artistName]
	return playlist
}
removeFromPlaylist("why", "not")