var playlist = {artistName:"Kanye", value:"Gold Digger"};

function updatePlaylist(playlist, artistName, songTitle){

playlist[artistName] = songTitle
return playlist;
  
}
  
updatePlaylist(playlist, "Kanye", 4);

function removeFromPlaylist(playlist, artistName){
    delete playlist.Kanye;
    return playlist;
  }
