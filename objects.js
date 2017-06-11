var playlist = {"Ed Sheeran": "Thinking out loud",
"Green day":"Holiday"};

function updatePlaylist(object, artistName, songTitle){
  object[artistName] = songTitle

  return object
}

function removeFromPlaylist(object, artistName){
  delete object[artistName]

  return object
}
