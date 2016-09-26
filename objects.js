var playlist = {
  artistName: "songtitle",
  Kanye: "Gold Digger"
};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle })
};

function removeFromPlaylist(playlist, artistName){
  delete playlist.Kanye;
  return playlist
}
