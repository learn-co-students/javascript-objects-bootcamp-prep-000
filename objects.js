var playlist = new Object({artistName: "sampleSong"})

function updatePlaylist(playlist, name, song){
  Object.assign(playlist, {[name]: song})
}

function removeFromPlaylist(playlist, name, song){
  delete playlist[name]
  
}