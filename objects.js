var playlist = {
  John Lennon: 'Imagine',
Beatles: 'Yellow Submarine'
}

//creates OBJECT Playlist with key and value
function updatePlaylist(playlist, artistName, songTitle) {
// creates function
  playlist[artistName] = songTitle

  return playlist

}


function removeFromPlaylist(playlist, artistName){
  delete playlist[artist]

return playlist
}

document.write (playlist());
