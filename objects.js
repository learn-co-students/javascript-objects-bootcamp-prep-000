var playlist = {object: "object"};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({'Phil Ochs': "Here's to the State of Mississippi"}, playlist, {[artistName]:songTitle});
}

function removeFromPlaylist(playlist, artistName){
  delete playlist["Kanye"];
  return playlist;
}
