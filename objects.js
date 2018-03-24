var playlist = {'Sabaton': 'The last stand', 'Amon Amarth': 'Blood eagle'}

function updatePlaylist (playlist_obj, artist_name, song_title) {
  playlist_obj[artist_name] = song_title
  return playlist_obj
}

function removeFromPlaylist (playlist_obj, artist_name) {
  delete playlist_obj[artist_name]
}