var playlist = {
  toto: "Africa"
}

function updatePlaylist(plist, artist, song) {
  plist[artist] = song;
  return plist;
}

function removeFromPlaylist(plist, artist) {
  delete plist[artist];
  return plist;
}
