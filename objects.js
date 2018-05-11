var playlist = {
  MAX: 'Lights Down Low',
  AnthemLights: 'Lighthouse',
  CeliaGearin: 'Break Me',
};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}