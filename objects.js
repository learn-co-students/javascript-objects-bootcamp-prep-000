var playlist = {
  Jim_James: 'New Life',
  Prince: 'Kiss',
  MJ: 'Bad'
};



function updatePlaylist (playlist, artistName, songTitle) {
 Object.assign ({}, playlist, {[artistName]: songTitle});
 return updatePlaylist;
}


function removeFromPlaylist(obj, artist){
  var objTwo = Object.assign({}, obj)
  delete objTwo.artist
  return objTwo
}