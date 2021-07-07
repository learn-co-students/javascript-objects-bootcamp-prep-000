var playlist = new Object({'Slowdive': 'Alison'});

function updatePlaylist(playlist, songTitle, artistName) {
  playlist[songTitle] = artistName
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName]
    return playlist
}
