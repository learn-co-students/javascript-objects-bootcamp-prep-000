var playlist = new Object({keys: '0'});

function updatePlaylist(Playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
delete playlist[artistName];
return updatePlaylist;
}