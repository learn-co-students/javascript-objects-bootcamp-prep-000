var playlist = {PostMalone: "Slowdive", NF: "My Bloody Valentine"};

function updatePlaylist(playlist, Bazzi, Beautiful) {
  playlist[Bazzi] = "Beautiful";
  return playlist;
}

function removeFromPlaylist(playlist, Slowdive) {
  delete playlist.Slowdive;
playlist;
}
