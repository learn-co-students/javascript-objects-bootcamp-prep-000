var playlist = {
  beatles: "Penny Lane",
}

function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}
updatePlaylist(playlist, "Haim", "My Song 5");

function removeFromPlaylist(obj, key) {
  delete obj[key];
  return obj;
}
removeFromPlaylist(playlist, "beatles");
