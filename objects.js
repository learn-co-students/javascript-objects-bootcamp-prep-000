var playlist = {
  Beatles: "Here Comes the Sun",
  DaftPunk: "Technologic",
  Guster: "Demons"
};

function updatePlaylist(playlist,artist,song) {
  playlist[artist] = song;
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName];
  return playlist;
}