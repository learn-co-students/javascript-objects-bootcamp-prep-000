var playlist = {
  ['The Beatles'] : 'Yellow Submarine',
  ['Frank Sinatra'] : 'Fly Me To The Moon',
};
//Only enables me to add one song for each artist. (Unless as an array)

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, {[artistName] : songTitle});
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
  
}