var playlist = {JimmyHindrex: "cross town traffic"};

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle});
}
function removeFromPlaylist(playlist, artistName) {
 return playlist.artistName = {};
   
}