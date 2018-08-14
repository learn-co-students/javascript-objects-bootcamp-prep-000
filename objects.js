var playlist = new Object({artist: "song"});


function updatePlaylist(obj, key, value) {
 
  obj[key]= value
}
function removeFromPlaylist(playlist, artistName){
 delete playlist[artistName];
}