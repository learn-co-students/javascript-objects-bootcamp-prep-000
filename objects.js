var playlist = {
  artistName1: "songTitle1",
  artistName2: "songTitle2",
  artistName3: "songTitle3",
  artistName4: "songTitle4"
};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
}
