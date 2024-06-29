function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch {
        document.getElementById("demo").innerHTML = err;
    }
}
 
function showPosition(position) {
    document.getElementById("demo").innerHTML = "Latitude:" +
    position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}