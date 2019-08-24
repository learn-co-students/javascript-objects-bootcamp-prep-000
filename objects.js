var playlist = {
  "Slowdive": "Alison",
  "My Bloody Valentine": "Sometimes",
  "Phil Ochs": "some"
}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { artistName: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
delete playlist[artistName]
return playlist
}
