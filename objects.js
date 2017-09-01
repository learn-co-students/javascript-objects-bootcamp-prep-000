var playlist = { beetles: 'Let it be', rollingStones: 'give me shelter'}

function updatePlaylist(obj, key, value) {
  return Object.assign(obj, { [key]: value })
}

function removeFromPlaylist(obj, key) {
  delete obj[key]
  return obj
}
