var playlist = { artistName: "Phil", songTitle: "Yay" };

function updatePlaylist (playlist, key, value){
	playlist[key] = value
	return playlist
}

function removeFromPlaylist (playlist, artistName){
	delete playlist[artistName];
	return playlist
}
