var objects = {artistName: "songTitle"}

var playlist = Object.assign({}, objects)

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({},playlist,{[artistName]:songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
