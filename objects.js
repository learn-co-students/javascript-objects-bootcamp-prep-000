var playlist = {
  Beatles: "Martha, My Dear",
  'Rolling Stones': "Ruby Tuesday",
  'George Harrison': 'Something'
}

var playlist = {
  "artistName": "songTitle"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
}