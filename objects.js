const playlist = {Kanye:'Yikes'};

var updatePlaylist = function(list,artist,song){
  return Object.assign({},list,{ [artist]:song })
}

var removeFromPlaylist = function(list,artist){
  delete list.artist;
}