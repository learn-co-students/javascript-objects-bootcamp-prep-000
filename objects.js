var playlist
playlist= Object.assign({},{shakira:"BOOM"})
console.log(playlist)
var artistName
var songTitle


function updatePlaylist(playlist,artistName,songTitle){
Object.assign(playlist,{[artistName]:songTitle})
  return playlist
}
function removeFromPlaylist(playlist,artistName){
    delete playlist[artistName]
  return playlist
}