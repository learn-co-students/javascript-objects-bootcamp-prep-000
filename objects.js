var playlist = {  "Soha": "Mil Pasos", "Ed Sheeran": "Shape of You", "Luis Fonsi": "Despacito", "Alberto Podesta": "La Capilla Blanca", "Dexy's Midnight Runners": "Come on Eileen" };

function updatePlaylist(playlist, artist, song) {
  // non destructively add artist:song to object "playlist"
  return (Object.assign({}, playlist, {[artist] : song}));
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
  // there's only destructive delete?
}

// reference parking lot 

/*
//non destructively add key-value pair to object 
return Object.assign({}, obj, { [key]: value })

// destructively add key-value pair to object 
return Object.assign(obj, { [key]: value })
*/