var playlist = { artist: 'Test Artist', song: 'Test Song' }
  playlist;

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
   return playlist
 };
