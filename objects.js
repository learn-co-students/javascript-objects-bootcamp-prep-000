var playlist = {
  artist: "song"
};

function updatePlaylist (playList,artist,song) {
  return Object.assign({},playList,{[artist] : song });
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
