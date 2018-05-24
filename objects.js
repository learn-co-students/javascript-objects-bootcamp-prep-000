var playlist = {};
playlist['Elvis Presley'] = ['Hound Dog'];

function updatePlaylist(object, artist, song) {
  object[artist] = [song];
  return object;
}

function removeFromPlaylist(object, artist) {
  delete object[artist];
  return object;
}

updatePlaylist(playlist, "Bruno Mars", "Just The Way You Are");
updatePlaylist(playlist, "Eva Cassidy", "Songbird");

console.log(playlist);

removeFromPlaylist(playlist, "Eva Cassidy");

console.log(playlist);