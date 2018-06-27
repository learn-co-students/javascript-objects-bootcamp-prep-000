var playlist = {artist: 'song title'};
function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = 'songTitle';
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}