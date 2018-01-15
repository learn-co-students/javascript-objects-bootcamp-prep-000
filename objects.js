var playlist = { Busiswa: 'Midnight Starring' }

function updatePlaylist(obj, name, title) {
  obj[name] = title
  return obj
}

function removeFromPlaylist(obje, artist) {
  delete obje[artist]
  return obje
}