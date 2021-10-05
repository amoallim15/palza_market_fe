    /* map */

    let map;

    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.532600, lng: 127.024612 },
        zoom: 15,
      });

    }

    