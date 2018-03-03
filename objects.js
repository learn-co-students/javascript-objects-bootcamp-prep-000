var playlist = {
  Prince: 'Purple Rain',
  ['Lady Gaga']: 'Poker Face',
  ['Stevie Wonder']: 'Superstition'
};

function updatePlaylist(playlist,artist,song){
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist,artist){
  
  if(delete playlist[artist]){
    return playlist
  }
}
  