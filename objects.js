var playlist = new Object({artistName: 'songTitle'});

function updatePlaylist(playlist, artistName, songTitle) {
 playlist[artistName] = songTitle;
return playlist;
}

function removeFromPlaylist(artistName) {
  delete playlist.artistName;
  return playlist
}
