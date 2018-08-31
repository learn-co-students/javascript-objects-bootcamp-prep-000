var playlist={
  "Slowdive":"Alison",
  "My Bloody Valentine":"Sometimes"
}
function updatePlaylist(playlist, artistName, songTitle){
 return playlist[artistName]=songTitle
}
function removeFromPlaylist(playlist, artistName){
var myNewVariable=playlist
delete myNewVariable[artistName]
}
  
