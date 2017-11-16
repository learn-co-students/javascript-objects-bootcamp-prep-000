 var playlist = {};

var playlist = {artistName: 'song title'};

function updatePlaylist(playlist,key,value) {
  playlist[key] = value
  return playlist
}

function removeFromPlaylist(sample,key) {
   delete sample.key
   return sample
}
