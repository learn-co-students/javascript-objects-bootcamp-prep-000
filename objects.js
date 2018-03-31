 function p(value){
    console.log(value);
 }

var playlist = { Kanye_West: "GoldDigger" };

function updatePlaylist(Obj_playlist, key_artist_name, value_song_title){
  Obj_playlist[key_artist_name] = value_song_title
   return Obj_playlist
}

function removeFromPlaylist(Obj_playlist, artist_name){
  delete Obj_playlist[artist_name]
  return Obj_playlist
}
