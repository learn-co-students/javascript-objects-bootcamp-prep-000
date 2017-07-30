var playlist = {
'ParryGrip': 'Taco Cat',
'Slyvian Esso': 'Die Young'
};

function updatePlaylist(playlist, artistName, songTitle) {
playlist[artistName] = songTitle
return playlist
}

function removeFromPlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  delete playlist[artistName]
  return playlist
}
