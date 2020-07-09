var playlist = {
  "The Black Keys": "Gold on the Ceiling"
}

function updatePlaylist(plist, artist, song) {
  plist[artist] = song;
  return plist;
}

function removeFromPlaylist(plist, artist) {
  delete plist[artist];
  return plist;
}