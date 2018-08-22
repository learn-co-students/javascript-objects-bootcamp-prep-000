var playlist = {
  Jim_James: 'New Life',
  Prince: 'Kiss',
  MJ: 'Bad'
};



function updatePlaylist (playlist, artistName, songTitle) {
 let newPlaylist = {}
 newPlaylist = Object.assign ({}, playlist, {[artistName]: songTitle});
 return newPlaylist;
}


function removeFromPlaylist(obj, artist){
  var objTwo = Object.assign({}, obj)
  delete objTwo.artist
  return objTwo
}