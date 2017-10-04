var playlist = {
john_bon_jovi : "armageddon",
sandra_nasic: "path"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist [artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  
  delete playlist[artistName];
  playlist;
  console.log(playlist);
  return playlist;
}
