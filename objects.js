var playlist = {Rush: "Tom Sawyer"}

function updatePlaylist(uno, dos, tres) {
  uno[dos] = tres;
  return uno
}

function removeFromPlaylist(uno, dos) {
  delete uno[dos]
  return uno
}