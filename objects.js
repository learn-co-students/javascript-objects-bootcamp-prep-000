var playlist = { punk: "Green Day", rock: "A Day to Remeber"};

function updatePlaylist(obj, key, value) {
  obj[key] = value

  return obj
}

function removeFromPlaylist(obj, key) {
  delete obj[key]

  return obj
}
