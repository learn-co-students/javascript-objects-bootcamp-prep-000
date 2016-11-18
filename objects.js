var playlist = {
  'Mastodon': 'Blood & Thunder',
  'BBD': 'Poison'
};

function updatePlaylist (playlist, artistName, songTitle){
  playlist["Phil Ochs"] = 'Here\'s to the State of Mississippi';
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
}
