var playlist = { 
artistName: "songTitle"
}

function updatePlaylist(playlist, artistName, songTitle) {
playlist['Phil Ochs'] = "Here's to the State of Mississippi"
return playlist
}


function removeFromPlaylist(playlist, artistName) {
var playlist = {Kanye: "Gold Digger"};
delete playlist.Kanye;
return playlist
}

