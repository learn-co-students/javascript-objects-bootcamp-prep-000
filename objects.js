var playlist = { LedZepplin : "Kashmir"}
function updatePlaylist(playlist, band, song){
  playlist[band] = song
  return playlist
};

function removeFromPlaylist(playlist, band){
  delete playlist[band]
  return playlist
};
