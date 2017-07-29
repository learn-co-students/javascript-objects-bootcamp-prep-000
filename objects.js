
var playlist = {};
var playlist = { moana: "moana song" };

function updatePlaylist(playlist, name, title) {
  playlist[name] = title
  return playlist
}
;
function removeFromPlaylist(playlist, named) {
  delete playlist[named];
  return playlist
}
;
