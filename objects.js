var playlist = {
  VanHalen: "Jump", 
  PinkFloyd: "The Wall",
  Weezer: "Feels Like Summer",
  Kanye: "Gold Digger"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye
  return playlist
}