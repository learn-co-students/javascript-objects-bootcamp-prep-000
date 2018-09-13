var playlist = { MinoReitano: "Italia" };

function updatePlaylist(playlist, artistName, songTitle){
  playlist['Phil Ochs'] = 'Ultimo bicchiere';
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  return playlist;
}