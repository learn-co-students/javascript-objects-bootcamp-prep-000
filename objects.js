var playlist = { "u2" : "Where the streets have no name" }

function updatePlaylist (obj, key, value) {
  obj[key] = value;
  return obj;
}

function removeFromPlaylist (obj, key) {
  delete obj[key];
  return obj
}
