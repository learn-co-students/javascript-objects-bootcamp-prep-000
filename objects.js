var playlist = {
  sanHolo:'weRise',
  cardiB:'iLikeIt'
}

/* another way to create this playlist is the following: 
var playlist = newPlaylist({
  sanHolo:'weRise',
  cardiB: 'iLikeIt'})
*/

function updatePlaylist (obj,key,value){
  obj[key] = value
  
  return obj;
}

updatePlaylist (playlist, 'miguel','skyWalker');
  
playlist;

function removeFromPlaylist(obj,key){
delete obj[key];
}
/* the key needs to be within brackets because it is calling the actual string. If it is left like obj.key it will not work because key is not the exact string, it is just a variable holding the place for the string*/

removeFromPlaylist(playlist,'cardiB')
playlist;
