var playlist = {
  'Slowdive': "Alison",
  'My Bloody Valentine': "Tears Don't Fall",
  'Phil Ochs': "Power and the Glory"
};

function updatePlaylist(playlist, artist, song) {
  Object.assign({}, playlist, {Gorillaz: "Dare"}, {Danzig: "Mother"})
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.Slowdive;
}