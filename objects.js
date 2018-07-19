var playList = new Object({keys: '0'});
function updatePlayList(playList, artistName, songTitle){
  playList[artistName] = songTitle
  return playList;
}
function removeFromPlayList(playList, artistName){
  delete playList[artistName];
  return playList;
}
