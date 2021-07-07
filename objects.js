var playlist = { 'Slowdive': 'Alison'}

function updatePlaylist(playlist, artistsName, songTitle){

  Object.assign(playlist, {'Phil Ochs': "Here's to the State of Mississippi"}, {'My Bloody Valentine': 'Sometimes'})
  
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist["Slowdive"]
  
  
  return playlist
  
}