var artist = Wale;
var song = The_Bloom;

var playlist = { 
  Wale: "The Bloom",
  Beyonce: "Diva"
};


updatePlaylist(playlist,artist,song) {
  playlist[artist] = song
  return playlist
}