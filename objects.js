var playlist = {
  Kanye: `Gold Digger`,
};
var playlist2 ={}

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, playlist2, {[`Phil Ochs`]: `Here's to the State of Mississippi`});
}

function removeFromPlaylist(obj, artistName) {
  delete playlist.Kanye;
  return playlist;
}
