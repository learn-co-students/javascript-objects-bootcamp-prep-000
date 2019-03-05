var playlist = { JustinBieber : "Baby"};
function updatePlaylist (playlist, artistName, songtitle){
 playlist[artistName] = songtitle
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
}
