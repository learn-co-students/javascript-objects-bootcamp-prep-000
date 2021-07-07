var playlist = {
  artist1: "song1",
  "Phil Ochs": "song2",
  artist3: "song3"
};

function updatePlaylist(thePlaylist, artistName, songTitle) {
    return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}

function removeFromPlaylist(thePlaylist, artistName, songTitle) {
  delete thePlaylist[artistName];
  return thePlaylist;
}



  






