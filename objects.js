var playlist = { artistName: 'songTitle' };

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist = {...playlist, artistName, songTitle}
}

function removeFromPlaylist(playlist, artistName ) {
  var removeFromPlaylist = {...playlist, artistName}
}
