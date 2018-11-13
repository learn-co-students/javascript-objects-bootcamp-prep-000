var playlist ={ 
  "Phil Ochs": 'song',
  Slowdive: 'song',
  "My Bloody Valentine": 'song'
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({artistName: [songTitle]})
}

function removeFromPlaylist(playlist, artistName){
  return delete playlist.Slowdive
}