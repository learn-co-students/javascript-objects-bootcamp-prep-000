const playlist = {WHouston:"I will always love you"}

function updatePlaylist(playlist, artistName, songTitle){
      playlist [artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  return delete playlist [artistName]
}

/////use square brackets when, as with artistName when key is not a simple string e.g. when it is a variable 