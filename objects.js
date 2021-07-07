var playlist = {'artistName': 'songTitle'}

function updatePlaylist(poopy, poop, poopie) {
 poopy[poop] = poopie;
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}