const playlist = {
  artist1: 'song 1'
};

function updatePlaylist(playList, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playList;
}

function removeFromPlaylist(playList, artistName) {
  delete playList[artistName];
}