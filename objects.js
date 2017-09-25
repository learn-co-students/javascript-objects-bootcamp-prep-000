var playlist = {
    beyonce: "single ladies",
    ladyGaga: "bad romance",
    shakira: "hips don't lie"
}

function updatePlaylist(obj, string, title) {
  obj[string] = title
  return obj
}

function removeFromPlaylist(obj, string) {
  delete obj[string];
  return obj;
}
