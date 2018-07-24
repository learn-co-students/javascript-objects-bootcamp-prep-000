var playlist = { artist: "song title" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = "song title";
  return playlist;
} 

function removeFromPlaylist(playlist, artistName) {
delete playlist[artistName];
return playlist;
}