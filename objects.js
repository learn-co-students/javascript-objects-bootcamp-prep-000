var playlist = {
  Mitski: "Townie",
  Television: "Venus",
  Foxygen: "No Destruction",
  Yaz: "Only You"
}

function updatePlaylist (obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

function removeFromPlaylist(obj, key) {
  delete obj[key];
  return obj;
}
