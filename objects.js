var playlist = { expect : 'chai', babel : 'babel-core', fs :'fs', jsdom : 'mocha-jsdom', path : 'path'}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  return delete playlist.Slowdive
  
}
