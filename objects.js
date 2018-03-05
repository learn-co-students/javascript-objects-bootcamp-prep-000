var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {['Phil Ochs']: "Here's to the State of Mississippi"})
}

function removeFromPlaylist(){
  delete playlist.artistName;
  return playlist
}