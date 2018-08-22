var playlist = {
  Jim_James: 'New Life',
  Prince: 'Kiss',
  MJ: 'Bad'
};


function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle
    return playlist
}

function removeFromPlaylist(obj, artist){
  delete obj[artist]
  return obj
}