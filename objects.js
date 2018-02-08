var playlist = {
  'Mississippi John Hurt' : 'Candyman'
};
function updatePlaylist {
  return Object.assign({}, playlist, {artist: song})
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist
}
