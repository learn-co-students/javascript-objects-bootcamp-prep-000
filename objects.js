var playlist = {
  artistName: 'Phil Ochs',
  songTitle: ' My Bloody Valentine'
}

function updatePlaylist(playlist, PhilOchs, Slowdive) {
  return Object.assign(playlist, {'Phil Ochs': 'Slowdive'})
}
function removeFromPlaylist(playlist, PhilOchs) {
  delete playlist["Slowdive"];
}
