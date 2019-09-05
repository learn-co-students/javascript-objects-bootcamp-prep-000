var playlist = {Adele: 'Skyfall', Zepplin: 'Kashmir'};

function updatePlaylist(playlist, Maiden, Beast){
  return Object.assign({}, playlist, {'Phil Ochs': "Here's to the State of Mississippi"});
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Kanye
  return playlist;
}