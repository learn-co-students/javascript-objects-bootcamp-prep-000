var playlist = {
  'Rolling Stones': 'Under My Thumb',
  'Theivery Corporation': 'The Thing'
};

function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

updatePlaylist(playlist, "The Beach Boys", "Surfer Girl");
removeFromPlaylist(playlist, "Rolling Stones");
console.log(playlist);
