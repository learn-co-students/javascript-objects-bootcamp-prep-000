var playlist = {
  artist_1: "song Tilte1",
  artist_2: "song itle2"
}
function updatePlaylist(playlist, key, value) {
  return(Object.assign({}, playlist, { [key]: value }));
}
console.log(updatePlaylist(playlist, 'artist_3', 'song Title_3'))

function removeFromPlaylist(playlist, key) {
  delete playlist[key];
  return playlist;
}
console.log(removeFromPlaylist(playlist, 'artist_1'))