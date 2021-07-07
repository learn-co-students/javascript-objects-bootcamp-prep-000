var playlist = new Object({ artist: "song title" });

function updatePlaylist(playlist, artist, songtitle) {
  playlist.artist = songtitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist;
}