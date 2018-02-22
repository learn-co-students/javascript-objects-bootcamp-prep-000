var playlist = {"Demi Lovato": "Warrior"};

function updatePlaylist(obj,artistName, song) {
  return Object.assign({},obj,{ [artistName] : song});
}

function removeFromPlaylist (obj, artistName) {
  delete obj[artistName];
  return obj;
}
