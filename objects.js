var playlist = {madonna: "Vogue"}
 
function updatePlaylist(playlist, artistName, songTitle) {
 playlist['Slowdive'] = 'Alison';
 playlist['My Bloody Valentine'] = 'Sometimes';
 playlist['Phil Ochs'] = "Here's to the State of Mississippi";
 return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  playlist;
}