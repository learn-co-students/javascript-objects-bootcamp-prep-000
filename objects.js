var playlist = {
  incubus:"Sick Sad Little World",
  daveMathewsBand: "Number 41",
  misaEGallo: "Sumerio"
};
  
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
  
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
  
}
