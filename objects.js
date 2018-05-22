var playlist = { Metallica: "MasterofPuppets"};
function updatePlaylist(playlist, artistName, songTitle){
return Object.assign({}, playlist, {[artistName]: songTitle});

}
