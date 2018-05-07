var playlist = {names: "song titles"};

function updatePlaylist(playlist, name, song) {
  playlist[name] =  song;
  return playlist;
}
function removeFromPlaylist(playlist,artistName)  {
  delete playlist[artistName];
  return playlist;
}