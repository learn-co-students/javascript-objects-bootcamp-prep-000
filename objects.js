var playlist = { artistName: 'songTitle'}

var playlist = new Object({ artistName: 'songTitles'});

function updatePlaylist(playlist, artistName, songTitles) {
 playlist[artistName] = 'songTitles'
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
delete playlist.artistName;
Object.assign({}, playlist)
  return 
}


 