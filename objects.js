var playlist = {ImagineDragons: ["Natural", "Demons"], GreenDay: ["21Guns", "September"]};

function updatePlaylist(obj, name, title) {
  obj[name] = title;
  return obj;
}
function removeFromPlaylist(obj, name) {
  delete obj[name];
  return obj;
}