var playlist = {Test: "TESTING"};

var updatePlaylist = (thePlaylist, artistName, songTitle) => Object.assign({}, thePlaylist, { [artistName] : songTitle});

function removeFromPlaylist (playlist, artistName) {

  delete playlist[artistName];
  return playlist;
}
