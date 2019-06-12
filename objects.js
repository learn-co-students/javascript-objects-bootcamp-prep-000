var playlist = {
  artistbob: "Bob Song",
  artistjoe: "Joe Song",
  artistsam: "Sam Song"
};

function updatePlaylist(playlist, name, title) {
  playlist[name] = title ;
  return playlist ;
}
function removeFromPlaylist(playlist, name) {
  delete playlist[name];
  return playlist;
}