var playlist = {
  Radiohead: "Karma Police"
}

function updatePlaylist (playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})
}


function removeFromPlaylist(playlist, artistName){
  return Object.assign({}, delete playlist.artistName)
      }
