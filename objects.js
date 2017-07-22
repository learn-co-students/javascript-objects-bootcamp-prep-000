var playlist = { drake: 'the motto'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
    return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistname;
  return playlist;
}
