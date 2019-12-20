let playlist = {
  bob: "baffalo",
  };
function updatePlaylist(playlist, singer, songTitle) {
  playlist[singer] = songTitle;

  return playlist;
}
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  
  return playlist;
}