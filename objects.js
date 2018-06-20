var playlist = {
  Drake: "God's Plan"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  
  return playlist;
}

function removeFromPlaylist(playlist,artistName){
  return delete playlist[artistName];
}