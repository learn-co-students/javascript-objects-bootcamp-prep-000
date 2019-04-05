var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle){
	playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
	console.log(playlist.artistName)
	delete playlist[artistName];
}


updatePlaylist(playlist, "aha", "take on you")
updatePlaylist(playlist, "MJ", "BILLY JEAN")

removeFromPlaylist(playlist, "MJ")
console.log(playlist)