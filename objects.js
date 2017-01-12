var playlist = {
  akon: 'O Africa',

}


function updatePlaylist(obj, artist, song){
  obj[artist] = song;

return obj;
}

function removeFromPlaylist(playlist, artistName){

  delete playlist.artistName;
playlist = {


  }

 return playlist;
}
