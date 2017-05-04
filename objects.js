var playlist = {
  Nirvana: "Smells like teen spirit"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  return Object.assign({}, playlist, {Nirvana: ["All Apologies"]})
}
