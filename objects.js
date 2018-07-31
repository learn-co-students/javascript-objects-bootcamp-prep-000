var playlist = {Chevelle: "Roswells Spell"};
function updatePlaylist(object, artistName, songTitle) {
 return Object.assign({}, playlist, {[PhilOchs]: "Here\'s to the State of Mississippi"});
}
function removeFromPlaylist(object, artistName) {
  delete playlist.Slowdive;
  return playlist;
}