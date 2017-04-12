playlist = {
  'Queen': 'Bicycle Race',
  'Kansas': 'Carry on Wayward Son',
  'Beastie Boys': 'Intergalactic'
};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, {[artistName]: songTitle});
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
