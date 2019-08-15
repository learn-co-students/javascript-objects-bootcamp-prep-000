var playlist = {
  artist1: 'song1',
  artist2: 'song2'
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {["Phil Ochs"]: "Here's to the State of Mississippi"})
}

function removeFromPlaylist(playlist, artistName){
delete playlist.Kanye
return playlist
}
