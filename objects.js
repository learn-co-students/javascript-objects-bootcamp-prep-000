var playlist = {artist: "song"}

function updatePlaylist(playlist, artistName, songTitle){

playlist[artistName] = [songTitle]
return playlist
  }
  
var playlist = {artist: "song", kaney:"power", eric:"Hello"}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
}