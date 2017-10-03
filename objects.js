var playlist = {weezer: 'Buddy Holly'};

function updatePlaylist(plist, artistName, songName) {
  plist = Object.assign({}, plist, {[artistName]: songName});
  return plist;
}

function removeFromPlaylist(plist, artistName) {
  delete plist[artistName];
  return plist;
}
