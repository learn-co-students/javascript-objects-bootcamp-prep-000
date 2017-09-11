var playlist = new Object({Periphery: 'The Bad Thing', Kanye: 'Gold Digger'});

function updatePlaylist(obj, artist, song) {

  return Object.assign({}, obj, {[artist]: song})

}

function removeFromPlaylist(playlist, artist) {

  delete playlist[artist]

  return playlist

}
