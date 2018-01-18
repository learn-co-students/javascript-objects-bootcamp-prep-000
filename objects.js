var playlist = { artistName: "songTitle" };

function updatePlaylist(playlist, artistName, songTitle) {
  var artistName = "Phil Ochs";
  var songTitle = "Here's to the State of Mississippi";
  playlist[artistName] = songTitle;
  return playlist;
}

var playlist = new Object({Kanye: 'Gold Digger'});

function removeFromPlaylist(playlist, Kanye) {
  delete playlist.Kanye;
  return playlist;
}