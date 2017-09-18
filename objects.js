var playlist = {
  tyrese: "one",
  ginuwine: "anxious",
  blackstreet: "joy"
}

function updatePlaylist(playlist, artistName, songTitle){
  return playlist.assign({artistName: 'songTitle'});
}

function removeFromPlaylist(playlist, artistName){
  return delete playlist.artistName
}
