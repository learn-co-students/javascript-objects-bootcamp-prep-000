var playlist = {"Post Malone": "Slowdive", NF: "My Bloody Valentine"};

//creates an object named playlist with artist:song key-value pairs in brackets
function updatePlaylist(playlist, Bazzi, Beautiful) {
  playlist[Bazzi] = "Beautiful";
  return playlist;
}
//creates a function that destructively adds an artist-song pair to the original

function removeFromPlaylist(playlist, Slowdive) {
  delete playlist.Slowdive;
return playlist;
}

//creates a function that destructively removes an artist from the playlist object
