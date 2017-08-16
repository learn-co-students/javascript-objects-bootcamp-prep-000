//var playlist = {  }
var playlist = new Object( )
var playlistArr = { artistName : 'songTitle' }
Object.assign( playlist, playlistArr )
//var playlist = Object.assign( {}, playlistArr )


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
