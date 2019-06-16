var playlist = { artist: "song" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist["Phil Ochs"] = "Slowdive";
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  return playlist
}
