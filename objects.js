var playlist = {artistName: "songTitle"}
function updatePlaylist(obj, key, value) {
obj[key] = value;
return obj;
}

function removeFromPlaylist(obj, key) {
return Object.assign({});
}