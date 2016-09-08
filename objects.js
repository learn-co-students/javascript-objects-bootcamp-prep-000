var playlist = {
  "Michael Jackson" : "Thriller",
  "Lenny Kravitz" : "American Woman"
};

function updatePlaylist(playlistObj, artistName, songTitle) {
  playlistObj[artistName] = songTitle;
  return playlistObj;
}

function removeFromPlaylist(playlistObj, artistName) {
  delete playlistObj[artistName];
  return playlistObj;
}
