const playlist = { weirdAl: "The Saga Begins", Queen: "Bohemian Rhapsody", Adele: "When we were young"};

var updatePlaylist = function(obj, artistName, songTitle) {
 obj[artistName] = songTitle;
 return obj
}

var removeFromPlaylist = function(obj, artistName) {
 delete obj[artistName];
 return obj;
}