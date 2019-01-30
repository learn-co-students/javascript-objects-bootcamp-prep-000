var playlist = {artist: "titles"};

function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign(playlist,{[artistName]:songTitle})
}
function removeFromPlaylist(playlist,artistName){
  return delete playlist[artistName];
}