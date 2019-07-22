var playlist = {"bob":"his song"};

function updatePlaylist(playlist, artistName, song) {
  playlist[artistName]=song;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
}