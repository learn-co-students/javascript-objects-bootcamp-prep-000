//create object
var playlist = { artistName: 'songTitle'};

//update playlist
function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist,{[artistName]: songTitle}  )
};

//remove artist from playlist
function removeFromPlaylist(playlist, artistName){
  a = {playlist:artistName};
  delete a.playlist;
  return a;
}

