var playlist = {kendrick: 'money trees'}

function updatePlaylist(obj, key, val)
{
  obj[key]=val
  return obj
}

function removeFromPlaylist(obj, key)
{
  delete obj[key]
  return obj
}
