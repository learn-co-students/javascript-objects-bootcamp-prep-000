var playlist = {
 artist: 'song' };
 
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
};

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}



// function updateObjectWithKeyAndValue(obj, key, value){
//   return Object.assign({}, object, { [key]: 'value');
// };