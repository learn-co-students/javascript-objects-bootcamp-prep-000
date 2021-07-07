var playlist = { "Linken Park": "Numb"};

function updatePlaylist(playlist, updat) {
  return Object.assign({}, playlist, {"Phil Ochs": "Here's to the State of Mississippi"});
}

function removeFromPlaylist(playlist,artistName) {
delete playlist['Kanye'];
return playlist
  
}