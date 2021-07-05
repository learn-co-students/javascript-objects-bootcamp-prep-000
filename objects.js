var playlist = { Slowdive: 'value'};

function updatePlaylist(playlist, artistName, songTitle ) {
playlist[artistName] = songTitle;
return playlist;
}

updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");
updatePlaylist(playlist, 'Slowdive', "Alison");
updatePlaylist(playlist, 'My Bloody Valentine', "Sometimes");

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  return playlist;
}