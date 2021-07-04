var playlist = new Object ({'The Eagles': 'Running on Empty', 'Kanye West': 'Gold Digger'
});

function updatePlaylist (obj, key, value) {
  obj [key] = value;
  return obj;
}

function removeFromPlaylist (obj, key) {
  delete obj [key];
  return obj;
}
