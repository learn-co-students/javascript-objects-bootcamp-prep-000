var playlist = {artistName:"Grateful Dead", songTitle:"Birdsong"}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({},
  playlist,
  {'Phil Ochs':"Here's to the State of Mississippi"})
}

function removeFromPlaylist(playlist, artistName){
//debugger;
  delete playlist [artistName]
  return playlist
}
