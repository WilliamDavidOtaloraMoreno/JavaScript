let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 34.057714972044266,
        lng: -118.27031544247866,
      },
      map,
      title: "Los Angeles",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 6.249321558227007,
        lng: -75.56421759818751,
      },
      map,
      title: "Medellin",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 39.565027869234235,
        lng: -3.5437157665569243,
      },
      map,
      title: "España",
    })
  );
}