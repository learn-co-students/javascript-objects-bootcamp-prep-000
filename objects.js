const playlist = {nilsson: 'one', Blur: 'song 2', KingstonTrio: 'Three Song'}

function updatePlaylist(playlist, artist, song) {
  playlist[artist]=song;
  return playlist
}

function removeFromPlaylist(playlist, artist, song) {
  delete playlist[artist];
  return playlist}