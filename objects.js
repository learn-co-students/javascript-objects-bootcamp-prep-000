var playlist = {
  Nirvana: 'Lithium'
};
function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle;
}
function removeFromPlaylist(playslist, artistName) {
  delete playlist[artistName];
}
