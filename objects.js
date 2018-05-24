var playlist = {dave: 'satellite'};
function updatePlaylist(playlist, artist, title) {
  return Object.assign(playlist, { [artist]: title });
}
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}