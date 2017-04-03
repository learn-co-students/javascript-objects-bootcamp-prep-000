var playlist = {Madonna: 'Holiday',Kanye: "Gold Digger"};

function updatePlaylist(playList, artistName, songTitle) {
  playList[artistName] = songTitle;

  return playList;
}

function removeFromPlaylist(playList, artistName) {
  delete playList[artistName];

  return playList;
}
