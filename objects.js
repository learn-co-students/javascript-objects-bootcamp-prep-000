var playlist = {
 zztop: "lowrider"
  }
function updatePlaylist(playlistname, artistName, songTitle){
playlistname[artistName] = songTitle;
  return playlistname
}

function removeFromPlaylist(playlistname, artistName){
  delete playlistname[artistName];
  return playlistname
}
