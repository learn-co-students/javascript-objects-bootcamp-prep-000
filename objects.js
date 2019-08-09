//Keys are artist names, values are song titles 
var playlist = {Lemon_Demon:'Ultimate Showdown'}; //created playlist object

//does playlist need to be in square breackets? Do I need set up so only accepts strings for artists, and if so how?
//function adds song and artist, as key-value pair and then returns whole playlist
function updatePlaylist(playlist,artistName,songTitle){
playlist[`${artistName}`] = songTitle
return playlist;
}

function removeFromPlaylist (playlist,artistName) {
delete playlist[`${artistName}`];
return playlist
}