const playlist = {
  Slowdive: "Alison",
  "My Bloody Valentine": "Sometimes"
}

function updatePlaylist(playObject, artistName, songTitle) {
  playObject[artistName] = songTitle
  return playObject
}

updatePlaylist( playlist, "Phil Ochs", "Here's to the State of Mississippi" )


function removeFromPlaylist(playObject, artistName) {
  delete playObject[artistName]
  return playObject
}

removeFromPlaylist( playlist, Slowdive )
