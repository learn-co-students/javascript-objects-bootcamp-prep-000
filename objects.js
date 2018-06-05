var playlist = {'artistName' : 'songTitle'}

function updatePlaylist(playList, artistName, songTitle){
  return Object.assign(playList, {[artistName]: songTitle});  
}

function removeFromPlaylist(playList, artistName){
  delete playList[artistName];
  return playList;
}