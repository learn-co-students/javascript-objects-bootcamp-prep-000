/*  assign an object by using curly brackets
function takes 3 parameters
object is updated with the KEY-VALUE pair using brackets because its a variable
*/

var playlist = {artistName : 'songTitle'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'songTitle';

return playlist;
}


/*   use DELETE to destructively remove the KEY artistName
and retun the new (updated) playlist
*/

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  
  return playlist;
}