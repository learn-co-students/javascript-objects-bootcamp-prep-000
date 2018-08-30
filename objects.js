var playlist = {journey: "don't stop believing"};

function updatePlaylist(list, artistName, songTitle){
list[artistName] = songTitle;
return list;
}

function removeFromPlaylist(list, artistName){
delete list[artistName];
}

