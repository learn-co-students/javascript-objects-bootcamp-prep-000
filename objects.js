
var playlist ={}

function updatePlaylist(playlist,artist,song){
  //return Object.assign({},playlist,{[artist]:song})
  //this will not make the next code sens coz it keeps
  //the origenal playlist wich is allready empty 
  return playlist[artist]=song
}
function removeFromPlaylist(playlist,artist){
  delete playlist[artist]
  return playlist
}
