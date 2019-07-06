var playlist = {
  'Slowdive': "Alison",
  'My Bloody Valentine': "sometimes"
};

function updatePlaylist() {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi";
}

function removeFromPlaylist() {
  delete playlist.Slowdive;
}