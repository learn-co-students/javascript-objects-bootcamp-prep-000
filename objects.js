var playlist = new Object({LinkinPark: 'Crawling',
                            KennyLoggins: 'Danger Zone',
                            MichaelJackson: 'Thriller' });

function updatePlaylist(funcPlaylist, artist, song) {
    funcPlaylist = Object.assign({}, funcPlaylist, {[artist]: song})
    return funcPlaylist
};

function removeFromPlaylist(funcPlaylist, artist) {
    delete funcPlaylist[artist]
    return funcPlaylist
}
