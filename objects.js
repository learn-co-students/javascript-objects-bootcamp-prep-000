var playlist = {
  Notorious: "Hypnotize",
  Nas: "Nastradamous",
  Dre: "Forgot about Dre",
  Snoop: "Gin and Juice"
};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName){
   delete playlist.artistName;
   return playlist
}
