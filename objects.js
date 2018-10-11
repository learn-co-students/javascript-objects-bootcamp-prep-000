var playlist = {
    dylan: "tangled up in blue",
    springsteen: "Born to Run"

}

function updatePlaylist(playlist, name, title) {
  playlist[name] = title;
  return playlist;
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name];
  return playlist;
}
