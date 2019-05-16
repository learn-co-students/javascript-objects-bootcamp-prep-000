//var playlist = {
  //'Phil Ochs': 'Here\'s to the State of Mississippi'
//}


var playlist = {
  'artistName': 'songTitle'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  //delete playlist.artistName;
  //playlist = {};
delete playlist[artistName]

  return playlist
}
