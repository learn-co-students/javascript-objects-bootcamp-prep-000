var playlist = new Object ({ Kanye: 'Gold Digger' })

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value})
}

updatePlaylist(playlist, 'artistName', 'songTitle');

function removeFromPlaylist(obj, key) {
  delete obj[key];

  return obj;
}

removeFromPlaylist(playlist, 'Kayne');
