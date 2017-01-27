var playlist = {'Cure': "Pictures of You",
 'Sheryl Crow': "Tuesday Night"};

function updatePlaylist(playlist, artistName, songTitle){
  // playlist = {}
  // artistName = "Phil Ochs"
  // songTitle = "Here's to the State of Mississippi"
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
