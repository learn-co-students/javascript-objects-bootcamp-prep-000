var playlist = {artistName:[]}

function updatePlaylist(p,a,s) {
  return Object.assign({},p,{
    [a]: s
  })
}

function removeFromPlaylist(p,a) {
  delete p[a]
  return p
}
