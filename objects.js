var playlist = {
  pink: "sausage"
};

  function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}   

function removeFromPlaylist(playlist, artistName) {
 playlist = {artistName: ''};
  delete playlist.artistName;
  return playlist;
}