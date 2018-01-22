var playlist = {
  "Phil Ochs": "Here's to the State of Mississippi"
};

function updatePlaylist(obj,artistName,songTitle){
return Object.assign({},obj,{[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}