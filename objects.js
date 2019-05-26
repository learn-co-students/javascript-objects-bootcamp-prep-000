var playlist = { artistName: "songTitle" };

function updatePlaylist(playlist, artistName, songTitle){
    var artistName = "Phil Ochs"
    playlist[artistName] = "Here's to the State of Mississippi"
    return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Kanye
  return playlist
}
