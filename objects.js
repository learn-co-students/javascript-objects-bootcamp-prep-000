var playlist = {mindy:'awesome'}

function updatePlaylist(vari, name, title){
  vari[name] = title
}

function removeFromPlaylist(vari, name){
  delete vari[name]
}