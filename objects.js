var playlist = {
"Phil Ochs": 'Slowdive',
"My Bloody Valentine": 'Gravebloom'
}

function updatePlaylist(playlist,artistName,songTitle){
 
 return Object.assign({}, playlist)
 }
function removeFromPlaylist(playlist, artistName){
  return delete playlist.Slowdive
}
