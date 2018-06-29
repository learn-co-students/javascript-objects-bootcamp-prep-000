var playlist = {'Glen Hansard': "Tell it to me now"};
function updatePlaylist(playlist, name, song) {
  return Object.assign(playlist, {[name]: song});
}
//updatePlaylist(playlist, 'name', 'song');