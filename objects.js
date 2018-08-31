var playlist = {
  "Slowdive": "Alison",
  "My Bloody Valentine":"Sometimes",
  "Phil Ochs": "Here's to the State of Mississippi"
};

function updatePlaylist(playlist, artistName, songTitle ){
 return songTitle;
}

function removeFromPlaylist (playlist, artistName){
  delete playlist[artistName];
}