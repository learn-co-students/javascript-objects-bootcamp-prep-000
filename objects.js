//Assign an object to the variable playlist and initialize the object with 
//a key-value pair — the keys will be artist names and the values 
//will be song titles.

var playlist = {Korn: "Fallen Away"};

//Updated playlistadds the 'artisName: songTitle' key value pair to Object 

function updatePlaylist(playlist, artistName, songTitle){
  
  playlist[artistName] = "songTitle";
  
}

function removeFromPlaylist(playlist, artistName){
  
  delete playlist[artistName];

  return playlist;
}