function getBasePath(service) {
    return "https://chilealerta.com/api/query/?user=demo&select=" + service;
}

function createRowDisaster(reference, magnitude, latitude, longitude, local_time) {
    return '<tr><td>' + reference + '</td><td>' + magnitude + '</td><td>' + latitude + '</td><td>' + longitude + '</td><td>' + local_time + '</td></tr>';
}

function createRowDisasterr(reference, magnitude, latitude, longitude, utc_time) {
    return '<tr><td>' + reference + '</td><td>' + magnitude + '</td><td>' + latitude + '</td><td>' + longitude + '</td><td>' + utc_time + '</td></tr>';
}

