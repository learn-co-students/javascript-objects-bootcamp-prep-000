var playlist = {godofwar: "Kronos", Pathofexil: 'blank'}

function updatePlaylist (object, key, value) {
  return object.assign({}, object,{[key]:value})
}

updatePlayList(playlist, 'GOT', 'Dragon')

function removeFromPlaylist(object, key) {
  delete object[key]
  return object
}

removeFromPlaylist(playlist, "godofwar")