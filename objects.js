var playlist = {"Phil Ochs": "Here's to the State of Mississippi", 'My Bloody Valentine': "Sometimes"};
function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign ({}, playlist, {Slowdive: ["Alison"]})
  return playlist
}
function removeFromPlaylist(playlist, Slowdive){
  delete playlist.Slowdive
  return playlist
}