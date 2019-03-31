var playlist = {
  Kamikazee:"Narda"
}

function updatePlaylist(ObjectA,ArtistA,TitleA){
  ObjectA[ArtistA]=TitleA
}

function removeFromPlaylist(ObjectA,ArtistA){
  delete ObjectA[ArtistA]
}