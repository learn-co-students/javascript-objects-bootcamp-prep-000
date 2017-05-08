var playlist = {
  artist1: "song1",
  artist2: "song2",
  artist3: "song3"
};

function updatePlaylist(thePlaylist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}

function removeFromPlaylist(thePlaylist, artistName) {
  delete thePlaylist[artistName];
  return thePlaylist;
}


