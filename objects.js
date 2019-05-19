var playlist = new Object({ breakfast: 'oatmeal' });

function updatePlaylist(Playlist, ArtistName, SongName ){
  Playlist[ArtistName] = SongName
  return Playlist
}

function removeFromPlaylist(Playlist, ArtistName){
  delete Playlist[ArtistName]
  return Playlist
}
