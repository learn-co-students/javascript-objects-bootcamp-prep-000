var playlist = {
  Perri: "human",
  Posner: "I Took A Pill In Ibiza",
  Clarkson: "Already Gone"
}

function updatePlaylist(playlist,artist,song) {
  playlist[artist] = song;
  return playlist
}

function removeFromPlaylist(playlist,artist) {
  delete playlist[artist];
  return playlist
}