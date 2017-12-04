//var objects = {artistName : 'songTitle'};
//var objects = {};

//var objects = {};
var playlist = Object.assign({}, {'artistName':'songTitle'})

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, {[artistName]:songTitle});

}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  playlist;
  return playlist;
}
/*
Create a function removeFromPlaylist that accepts two arguments
(the playlist object and the artist name). The body of the function
should delete the key-value pair from the playlist and return the updated playlist.
*/
