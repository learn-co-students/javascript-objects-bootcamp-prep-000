var playlist = new Object({artist: 'song title'});

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}

// removeFromPlaylist(playlist, artist);

// console.log(playlist);
// console.log(removeFromPlaylist({ Kanye: "Gold Digger" }, "Kanye"))
