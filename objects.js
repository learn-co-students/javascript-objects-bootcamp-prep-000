var playlist = {zeritu: "athidibign"}

function updatePlaylist(playlist, artistName, songTitle){
  return playlist[artistName] = songTitle;
}



function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist 
}