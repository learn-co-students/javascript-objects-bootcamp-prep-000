var playlist = {a : "b"};

function updatePlaylist(pl, name, title) {
  pl[name] = title;
  return pl;
}
function removeFromPlaylist(pl, name) {

  delete pl[name];
  return pl;
}
