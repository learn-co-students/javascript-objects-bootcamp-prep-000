var playlist = {
  DaftPunk: "One More Time",
  BeeGees: "Saturday Night Fever",
  TheScript: "Break Even"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye
  return playlist
}
