var playlist = {Slowdive: "Alison"}

var key 
var value 

function updatePlaylist (playlist,key,value) {
  playlist[key] = value
}


key = "Slowdive"
function removeFromPlaylist(playlist,key) {
  delete playlist[key];
  return playlist
}