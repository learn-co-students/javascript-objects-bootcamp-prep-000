var playlist = new Object();
var playlist= {PSY: "Gangnam Style"};


function updatePlaylist(playlist, artistName, songTitle) {

  playlist[artistName] = songTitle;

  return playlist;

}

function removeFromPlaylist(playlist, artistName) {


  delete playlist[artistName];
  return playlist;


}
