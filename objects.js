var playlist = {
  drDre: 'The Chronic',
  slickRick: 'Rick the Ruler',
  snoopDogg: 'Doggy-style'
}

function updatePlaylist(playlist, artist, song) {
    playlist[artist] = song
    return playlist
}

function removeFromPlaylist(playlist, artist) {
    delete playlist[artist]
    return playlist
}
