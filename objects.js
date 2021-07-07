var playlist = {linkinPark:"Numb", AvengedSevenfold:"Doomsday"};

//function callBack (playlist){
  //return playlist;
//}

function updatePlaylist(playlist, artistName, songTitle) {
  //return Object.assign({}, playlist, { [artistName]: songTitle })
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;

}

var artistName = "hi";
var songTitle = 'doom';

//console.log(callBack(playlist));
console.log(updatePlaylist(playlist, artistName, songTitle));
console.log(removeFromPlaylist(playlist,artistName));
