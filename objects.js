var playlist = {'Justin Timberlake':'Cant Stop the Feelin'};

function updatePlaylist(playlist, artistName, songTitle) {
	return Object.assign({}, playlist,{ [artistName] : songTitle });
}

function removeFromPlaylist(playlist,artistName){
	delete playlist[artistName];
	return playlist;
}
