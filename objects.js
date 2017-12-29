var playlist = { Otown: "All or Nothing"};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}


//Unable to get the last test to pass without hardcoding the artistName in the function. Following test failed, the only difference being the artistName hardcoded:
// function removeFromPlaylist(playlist, artistName){
//   delete playlist['artistName'];
//   return playlist;
// }
