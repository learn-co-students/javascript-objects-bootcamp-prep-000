var playlist= {
  britney: "slave",
  aguilera: "genie",
  boys: "call",
};
function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign({}, playlist,{[artistName]:songTitle}
  )
}
function removeFromPlaylist(playlist,artistName){
     delete playlist[artistName];
     return playlist 
}
