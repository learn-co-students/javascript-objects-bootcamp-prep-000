var playlist = {theKillers: "The Man" };

function updatePlaylist (obj, artist, title) {
  obj[artist] = title;
}

function removeFromPlaylist (obj, artist) {
  delete obj[artist];
}
