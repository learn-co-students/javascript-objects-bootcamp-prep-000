var playlist = new Object({ 'Korn': 'Did My Time', 'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes' })


function updatePlaylist(playlist, artistName, songTitle){
  playlist['Phil Ochs'] = "Here's to the State of Mississippi";
  return Object.assign({}, playlist, { [artistName]: songTitle });
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
}