var playlist = {};
var playlist = {'Adele': 'Hello', 'Justin Beiber': 'What Do You Mean', 'Taylor Swift': 'Love Story'};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist;
}
