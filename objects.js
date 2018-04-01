var playlist = {
  aliciaKeys: "Keep on Fallin'",
  michaelJackson: "Rock With You",
  amyWinehouse: "Rehab"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]; 
  return playlist;
}