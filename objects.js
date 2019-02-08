var meals = { breakfast: "oatmeal"} 
var meals = new Object ({breakfast: 'oatmeal'})

// two ways of creating Object
//breakfast is the key and "oatmeal" is the value

var playlist = {
  slayer:'raining blood',
  prince: 'dancing in the moonlight'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}