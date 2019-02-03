var playlist = {hansen: "mm bop"}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song 
  return playlist
  //return Object.assign({}, playlist, {[artist]: song} )
}

function removeFromPlaylist(playlist, artist) {
    delete playlist[artist]
    return playlist
    // const copyOfPlaylist = {...playlist}
    // delete copyOfPlaylist[artist]
}