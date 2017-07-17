var playlist = new Object({
  Ekko: 'Smile',
  diaz: 'ashes',
  talisman: 'zanzibar'
})


function updatePlaylist(playlist, artistName, song) {
return Object.assign({},playlist, {[artistName] : song})
}

function removeFromPlaylist(playlist, artistName) {
delete playlist[artistName]
return playlist
}
