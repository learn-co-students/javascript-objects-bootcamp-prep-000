var playlist = {artistName:"songTitles"}

function updatePlaylist(playlist, artistName,songTitles) {
  // playlist['artistName'] =songTitles;
  
  playlist['Slowdive'] = 'Alison';
  playlist['My Bloody Valentine'] = 'Sometimes';
  playlist["Phil Ochs"] = "My Blood Valentine";
  
  return playlist;
}

function removeFromPlaylist (playlist,artistName) {
  delete playlist['Slowdive'];
} 