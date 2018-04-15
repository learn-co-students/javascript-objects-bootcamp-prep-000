var playlist = {Slowdive: 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"}

function updatePlaylist (obj, key, value)
{
  obj[key] = value
  return obj
}


function removeFromPlaylist (obj, key)
{
  delete obj[key]
  return obj
}