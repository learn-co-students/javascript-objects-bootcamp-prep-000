const playlist = {
  Shakey Graves: "Hard Wired",
  Mr Gnome: "Mustangs",
  Sturgill Simpson: "The Promise"
}

function updatePlaylist(obj, name, title) {
  return Object.assign({}, obj, { [name]: title });
}

function removeFromPlaylist(obj, name) {
  delete obj.name;
  return obj;
}
