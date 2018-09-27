var playlist = ({JayZ: `Otis`})

function updatePlaylist(playlist, Slowdive, Time) {
  playlist[Slowdive] = Time;
  return playlist;
}

function removeFromPlaylist(playlist, Slowdive) {
  delete playlist.Slowdive;
  return playlist;
}
