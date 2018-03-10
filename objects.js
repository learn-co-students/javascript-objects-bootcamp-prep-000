var playlist = {};

var playlist = new Object({ 
  'Ella Fitzgerald': "My Funny Valentine",
  'Billie Holiday': "Gloomy Sunday"
});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName] 
  return playlist
}
