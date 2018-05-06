var playlist = {
  artist: 'Me',
  song: 'Mine'};

function updatePlaylist(playlist, artist, song){
    playlist[artist] = 'you'
    return playlist
};

function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
};
