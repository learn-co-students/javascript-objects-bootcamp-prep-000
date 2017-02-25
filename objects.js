var playlist = {
  'Elvis': 'Love Me Tender',
  'Madonna': 'Like a Virgin',
  'The Beatles': 'Yellow Submarine'
};

function updatePlaylist(playlist, artistsName, songTitle){
  playlist[artistsName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistsName){
  delete playlist[artistsName]
  return playlist

}
