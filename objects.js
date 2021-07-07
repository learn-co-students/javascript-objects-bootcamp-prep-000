var playlist = {
  "Phil Ochs": "Here's To The State Of Mississippi",
  "My Bloody Valentine": "Sometimes",
  "Slowdive": "Alison"
}

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, obj, {artistName: songTitle});
}

function removeFromPlaylist(obj, artistName) {
  delete obj[artistName];
  return obj;
}
