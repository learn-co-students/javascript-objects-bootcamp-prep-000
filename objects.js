var playlist = {
  Elohim: 'All That Gold',
  KingDeco: 'Read My Lips',
  Salvatore: 'Dive'
}

function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign({},playlist,{[artistName]: songTitle});
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
  return playlist;
}