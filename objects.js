

var playlist = new Object();
var artistName;
var songTitle;
playlist={"bob":"wind"};



function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
        delete playlist[artistName];
        return playlist;
}
