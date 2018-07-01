var playlist = {
  Babymetal: "Gimme Chocolate!!"
};

function updatePlaylist(Object, artistName, songTitle) {
  Object[artistName] = songTitle;
  return Object;
}

function removeFromPlaylist(Object, artistName){
  delete Object[artistName];
  return Object;
}
