var playlist = {Lennon: 'imagine'}

function updatePlaylist (obj, name, title) {
  obj[name] = title
  return obj
}
function removeFromPlaylist(obj, name) {
  delete obj[name]
  return obj
}