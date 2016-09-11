var playlist = {
  'Michael Jackson':'Beat it',
  'Juan Gabriel':'Querida',
  'Michael Buble':'Killing You Softly'
};

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
  return playlist;
}
