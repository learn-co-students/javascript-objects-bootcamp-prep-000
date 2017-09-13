var playlist {
  Drake: "Sacrifices"
  Kavinsky: "Nightcall"
  Cortes: "I Get It"
}

function updatePlaylist (obj,key,value) {
  return Object.assign({},obj, {[key]: value})
}

function removeFromPlaylist (obj, string) {
  return Object.assign({},playlist,{})
}
