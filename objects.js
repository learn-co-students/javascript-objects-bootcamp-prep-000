var playlist = {}
var playlist = new Object()
var playlist = {vulfpeck: "back pocket"}

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist (playlist, artistName){
  delete playlist[artistName]
  return playlist
}
