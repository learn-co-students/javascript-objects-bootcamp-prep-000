var playlist = {Metallica:"Fuel"}

function updatePlaylist(inputObject, artistName, songTitle){
  inputObject[artistName] = songTitle
  return inputObject
}

function removeFromPlaylist(inputObject, artistName){
  delete inputObject[artistName]
  return inputObject
}