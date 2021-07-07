var playlist = {
  "Phil Ochs": "Here's to the State of Mississippi"
}

function updatePlaylist(object, artist, song){
  return Object.assign({}, playlist, {[artist]: song});
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
