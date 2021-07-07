var playlist = {beck: "100 BPM", lorde: "Royals", chvrches: "some song I don't remember"};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}