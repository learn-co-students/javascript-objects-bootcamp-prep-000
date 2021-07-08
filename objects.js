playlist = { Kanye: "Gold Digger" };

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle});
}
function removeFromPlaylist(playlist, artistName){
  temp = Object.assign({}, playlist);
 delete temp[artistName];
 return temp;
}
