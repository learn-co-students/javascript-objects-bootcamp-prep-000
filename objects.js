var playlist = {
  daftPunk:"Digital Love",
};
function updatePlaylist(playlist, name, title){
  playlist[name] = title;
  return playlist
}
function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
}
