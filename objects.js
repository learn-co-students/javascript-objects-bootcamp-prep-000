// initialize the playlist object
var playlist = {
  artistName: 'Adele', // key value = artistName and the value is Adele
  artistTitle: 'hello'
}
playlist
// update function
updatePlaylist(playlist,artistName, songTitle){
   return Object.assign({playlist},artistName,songTitle)
}
playlist
// remove function
function removeFromPlaylist(playlist, artistName){
  delete playlist[0]
  return playlist
}
 playlist
