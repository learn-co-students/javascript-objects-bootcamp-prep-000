var playlist = {artistName: 'song title'};

function updatePlaylist(obj, artistName, title) {
    //obj[artistName] = title;
    //return obj;
    // OR
    return Object.assign({}, obj, {[artistName]: title});
}

function removeFromPlaylist(obj, artistName){
    if(obj.hasOwnProperty(artistName))
        delete obj[artistName];
    return obj;
}
