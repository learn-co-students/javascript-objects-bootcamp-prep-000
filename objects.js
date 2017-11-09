// object defines an object called playlist --
// keys will be artist names and the values will be song titles.
var playlist = { artistName: "songTitle"}

// objects updatePlaylist(playlist, artistName, songTitle)
// adds the 'artistName: songTitle' key-value pair to 'playist'
function updatePlaylist(object, artistName, songTitle){
  object[artistName] = songTitle // original code * object.artistName = songTitle * did not work
  return object
}

// objects removeFromPlaylist(playlist, artistName) removes 'artistName' from 'playlist'
function removeFromPlaylist(object, artistName){
  delete object[artistName]
  return object
}
