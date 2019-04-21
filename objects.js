var playlist = {
  artist: 'song'
}

function updatePlaylist(playlist, artistName, songTitle) {
      playlist.artistName = songTitle
      return updatePlaylist
}

function removeFromPlaylist(playlist, artistName, songTitle){
  delete playlist.artistName;
  return removeFromPlaylist
}
