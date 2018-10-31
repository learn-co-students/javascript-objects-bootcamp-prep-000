var playlist = {
  thestrokes: 'last nite',
  kanyewest: 'gold digger',
}

function updatePlaylist(playlist,artistName,SongTitle) {
playlist[artistName] = SongTitle
return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
 return playlist
}