var playlist = {Oasis: "Definetly Maybe"};
Object.assign({},playlist,{REM: "Everybody hurts"});

function updatePlaylist (playlist,artistName,songTitle) {
  playlist.artistName = 'songTitle';
}

function removeFromPlaylist (playlist,artistName) {
  delete playlist.artistName;
}
