var playlist ={artist:''};

function updatePlaylist(pl,artist,song){
   pl[artist] =song;
   return pl;
}


function removeFromPlaylist(pl,artistName){
   delete pl[artistName];
   return pl;
}
