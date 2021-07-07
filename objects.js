var playlist = {
  Ratatat:"Loud Pipes",
  ArcticMonkeys:"Do I Wanna Know?",
  TheBlackKeys:"The Weight of Love"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
};
