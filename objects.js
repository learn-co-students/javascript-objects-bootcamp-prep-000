var playlist = {'huh':'duh'}

function updatePlaylist(playlist,artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlistarg, artistName){
  var playlist = playlistarg;
  delete playlist[artistName];
  return playlist;
}
