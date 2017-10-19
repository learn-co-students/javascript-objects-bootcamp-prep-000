var playlist = {
  taylorSwift: "red",
  kesha: "rainbow"
};

function updatePlaylist(playlist,artistName,songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName];
  return playlist;
}
