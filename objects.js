var playlist = {
    beyonce: 'sinlge ladies',
    nasx: 'old town road',
    bmalvin: 'ahora'
}

function updatePlaylist(playlist, artist, song){
    playlist[artist] = song
    return playlist
}

function removeFromPlaylist(playlist, artist){
    delete playlist[artist]
    return playlist
}
