"use strict";
function initMap() {
    const myLatLng = {
    lat: -21.700925827026367,
    lng: -45.89070510864258
    };
    const map = new google.maps.Map(document.getElementById("gmp-map"), {
    zoom: 14,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
    });
    new google.maps.Marker({
    position: myLatLng,
    map,
    title: "My location"
    });
}