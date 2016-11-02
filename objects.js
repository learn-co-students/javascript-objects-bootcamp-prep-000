var playlist = {0:0};

function updatePlaylist(obj, name, sing)
{
    obj[name] = sing;
    return obj;
}

function removeFromPlaylist(obj, name)
{
    delete obj[name];
    return obj;
}
