var playlist = {
  Nirvana: "Love Buzz" 
}

function updatePlaylist(obj, artist, name) {
  obj[artist] = name 
  return obj
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}