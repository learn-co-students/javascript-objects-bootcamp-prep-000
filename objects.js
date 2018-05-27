var playlist = {
  'Queen Bee' : 'Run the World (Girls)',
  'Spice Girls': 'Wanna Be'
}

function updatePlaylist(playlist1, artistName, song){
  //update playlist1 in a destructive manner
  playlist1[artistName]=song

  //return playlist1 object without changing playlist1
  return Object.assign({},playlist1,{[artistName]:[song]})
}

function removeFromPlaylist(playlist1, artistName){
  return delete playlist1[artistName]
}
