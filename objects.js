var playlist = {kanye: "gold digger"}

function updatePlaylist (obj, name, title) {
  obj[name] = title
  return obj
}

function removeFromPlaylist (obj, name) {
  delete obj[name]
  return obj
}
