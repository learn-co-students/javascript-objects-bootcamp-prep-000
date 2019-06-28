var playlist = {Hanson:"MmmBop"};

function updatePlaylist(playlist, Hanson, MmmBop) {
  playlist[Hanson] = MmmBop;
  return playlist
}

function removeFromPlaylist(playlist, Slowdive) {
  delete playlist.Slowdive;
  return playlist
}