var playlist = { Maroon5: 'Girls like you' }

function updatePlaylist(playlist, key, value) {
  playlist[key] = value
  return playlist
}

updatePlaylist(playlist, "Toby", "Feel it" )

console.log(playlist) // { Maroon5: 'Girls like you', Toby: 'Feel it' }


function removeFromPlaylist(obj, artist) {
  delete obj[artist]
  return obj
}

removeFromPlaylist(playlist, "Toby")

console.log(playlist) // { Maroon5: 'Girls like you' }
