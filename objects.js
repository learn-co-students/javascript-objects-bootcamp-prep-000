


var playlist = {
  shakira: 'Hips Don\'t Lie',
  luis_fonsi: 'Despacito',
  ventino: 'Apaga y Vamonos'
};

 
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
} 