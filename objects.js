var playlist = { myBloodyValentine: 'Sometimes'};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist.Slowdive = 'Alison';
  playlist['Phil Ochs'] = "Here's to the State of Mississippi";
}
function removeFromPlaylist(playlist, artistName) { 
  delete playlist.Slowdive;
}