var playlist = {
  vulfpeck: "cory wong",
  zedd: "clarity",
  daftPunk: "get lucky"
};

function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign(playlist,{
    [artistName]: songTitle
  })
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
  return playlist;
}
