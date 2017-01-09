var playlist = {kendrick: "ADHD"}

var updatePlaylist = function (playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

var removeFromPlaylist = function(playlist, artistName){
  delete playlist[artistName]

  return playlist
}
