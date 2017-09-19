var playlist = new Object( {artist: "song"});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  return Object.assign({}, delete playlist.artistName)
}
