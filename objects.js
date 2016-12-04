var playlist = new Object({
  workout: 'Lose Yourself'
});

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, {[artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName){
  return Object.assign({})
}
