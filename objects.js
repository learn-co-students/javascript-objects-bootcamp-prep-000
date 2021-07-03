var playlist = new Object({Zepplin: 'Stairway', Zappa: 'Gangsta'})

function updatePlaylist (list,artist,song) {
  return Object.assign({},list,{[artist]: song})
}
updatePlaylist(playlist,ACDC,'Dynamite')

function removeFromPlaylist (list,artist) {
var newList = Object.assign({},list)
delete newList[artist]
  return newList
}
removeFromPlaylist(playlist,Zepplin)
