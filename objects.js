var playlist = { artistName: 'songTitle'};

function updatePlayList(playlist,artistName,songTitle){
  return Object.assign({},playlist,{[artistName]:songTitle});

}

function removeFromPlaylist(playlist,artistName){
  return delete playlist.artistName;

}
