var playlist = ({artistName: 'Slowdive', songTitle: 'Allison'});
function updatePlaylist (playlist, artistName, songTitle ) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}
playlist['My Bloody Valentine'] = 'Sometimes';
playlist['Phil Ochs'] = "Here's to the State of Mississippi";

function removeFromPlaylist(playlist, artistName) {
  return delete playlist['Slowdive'];
}



