var playlist = {
    chopin : 'vegetables'
}

function updatePlaylist(p, a, s) {
    p[a] = s;
    return p
}

function removeFromPlaylist(p, a, s) {
    delete p[a]
    return p
}
