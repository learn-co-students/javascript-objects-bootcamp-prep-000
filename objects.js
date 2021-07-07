var playlist = { Nell: "healing process" };

function updatePlaylist(obj, name, title) {
  return Object.assign({}, obj, { [name]: title });
}

function removeFromPlaylist(obj, name) {
  delete obj[name];
  return obj;
}
