var playlist = {
  "Yo-Yo Ma": 'Sonata',
  "The Beatles": 'Yellow Submarine',
  "Mozart": 'Fifth Symphoney'
}

function updatePlaylist (playlist,artistName,songTitle){
playlist[artistName] = songTitle; //object[key] = newValue > playlist is going to look for the key aristName, and reassign the value to the new value of SongTitle
return playlist;
}

//mistake: to do return playlist[artistName] = songTitle

function removeFromPlaylist (playlist,artistName){
  delete playlist[artistName];//The body of the function should delete the key-value pair from the playlist and return the updated playlist.
  return playlist;
}
//delete artsitName from playlist 
