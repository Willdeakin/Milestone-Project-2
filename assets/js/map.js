  var mymap = L.map('mapid').setView([51.505, -0.09], 2);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiNXBlbmNlc3BlbmNlIiwiYSI6ImNrbWk4c3R1MDBld3QydXF2czR5NmNqNTIifQ.8G4oo2NMwbYjWvajipthaA'
    }).addTo(mymap);
    
    var berlin_reichstag = L.marker([52.5186, 13.3762]).addTo(mymap);
    berlin_reichstag.bindPopup("<b>Reichstag</b><br>The Reichstag Building restored after the fall of the Berlin wall").openPopup();

    var berlin_brandenburg = L.marker([52.5163, 13.3777]).addTo(mymap);
    berlin_brandenburg.bindPopup("<b>Brandenburg gate</b><br>The Brandenburg gate is an 18th century monument, historically acting as a gate to the city").openPopup();

    var berlin_museum = L.marker([52.5169, 13.4019]).addTo(mymap);
    berlin_museum.bindPopup("<b>Museum Island</b><br>Museum Island is a museum complex on the north is Spree island, boasting a complex of Berlin's most historic museums").openPopup();

    var berlin_column = L.marker([52.5186, 13.3501]).addTo(mymap);
    berlin_column.bindPopup("<b>Victory Column</b><br>Victory Column is a monument built to commemorate the Prussian victory over Denmark").openPopup();

    var berlin_cathedral = L.marker([52.5145, 13.3762]).addTo(mymap);
    berlin_cathedral.bindPopup("<b>Berlin Cathedral</b><br>Berlin Cathedral is the largest protestant church in Germany and acts as a dynastic tomb").openPopup();

    var berlin_gallery = L.marker([52.5050, 13.4397]).addTo(mymap);
    berlin_gallery.bindPopup("<b>East Side Gallry</b><br>The East Side Gallery is an open-air gallery on the longest survuvung section of the Berlin wall").openPopup();

    var marker = L.marker([51.5, -0.09]).addTo(mymap);
    var circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(mymap);
    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(mymap);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");
    var popup = L.popup()
        .setLatLng([51.5, -0.09])
        .setContent("I am a standalone popup.")
        .openOn(mymap);
    function berlin_map() {
        mymap.setView([52.5200,13.4050],13);
    }
    function paris_map() {
        mymap.setView([48.8566, 2.3522],13);
    }
    function rome_map() {
        mymap.setView([41.9028, 12.4964],13);
    }