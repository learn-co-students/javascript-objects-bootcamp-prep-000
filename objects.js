var playlist= {artist: 'song name'}

function updatePlaylist(playlistobj,artname,song){
  playlistobj[artname]=song
  return playlistobj
}
function removeFromPlaylist (playlistob,artname){
  delete playlistob[artname]
  return playlistob
}