var playlist = {
  'radiohead': "creep",
  'arctic monkeys': "arabella",
  'leonard': "suzzanne"
};

function updatePlaylist (playlist, artistName, songTitle) {
  return object.assign ({}, playlist, {[artistName]:songTitle})
}

function removeFromPlaylist (playlist, artistName) {
delete playlist [artistName] ;
return playlist
}
