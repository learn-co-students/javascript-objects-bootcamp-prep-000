var playlist = {'Aphex Twin': 'Cow Cud Is A Twin'}

function updatePlaylist(obj, artist, song) {
  return obj[artist] = song
}

function removeFromPlaylist(obj, artist) {
  return delete obj[artist]
}

updatePlaylist(playlist, 'Bonobo', 'Eyesdown')
console.log(playlist)
removeFromPlaylist(playlist, 'Aphex Twin')
console.log(playlist)