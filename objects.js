var meals ={}

var playlist = {
  Stones: 'deadFlowers',
  Nirvana: 'nevermind',
  pearljam: 'evenflow'

}

function updatePlaylist(playlist,artist,songTitle){
  playlist[artist] = songTitle
  return playlist
}

function removeFromPlaylist(playlist,artist){
  delete playlist[artist];
  return playlist;
};
