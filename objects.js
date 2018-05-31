var playlist = {};
playlist.artist = "bon jovi"


function updatePlaylist (playlist, artist, song) {
  playlist[artist] = song;
}

function removeFromPlaylist (playlist, artist) {
  delete playlist[artist];
  return playlist;
}