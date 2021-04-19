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
    berlin_gallery.bindPopup("<b>East Side Gallery</b><br>The East Side Gallery is an open-air gallery on the longest survuvung section of the Berlin wall").openPopup();


    var rome_colosseum = L.marker([41.8902, 12.4922]).addTo(mymap);
    rome_colosseum.bindPopup("<b>The Colosseum</b><br>The Colosseum is the largest still standing roman structure, at almost 2 thousand years old it is also the largest standing ampitheater").openPopup();

    var rome_vatican = L.marker([41.9029, 12.4534]).addTo(mymap);
    rome_vatican.bindPopup("<b>Vatican City</b><br>The Vatican City is the smallest independent state in the world, containing many sites of Catholic importance such as the Sistine Chapel").openPopup();

    var rome_museum = L.marker([41.903065, 12.466276]).addTo(mymap);
    rome_museum.bindPopup("<b>Castel Sant'Angelo National Museum</b><br>The Castel Sant'Angelo has functioned as a papal residence and a fortress, now acessible by a bridge by the public with a large collection of historic weapons to view along with prison cells and papal apartments").openPopup();

    var rome_trevi = L.marker([41.9009, 12.4861]).addTo(mymap);
    rome_trevi.bindPopup("<b>Trevi Fountain</b><br>As Rome's largest fountain, it is said that tossing a coin into the Trevi Fountain assures your return to Rome").openPopup();

    var rome_centro = L.marker([41.8982, 12.4773]).addTo(mymap);
    rome_centro.bindPopup("<b>Centro Storico</b><br>Centro Storico is the historic centre of Rome, containing many historic sites and monuments to witness, as well as serving as a bustling hub of hospitality").openPopup();


    var vegas_canyon = L.marker([36.1069, -112.1129]).addTo(mymap);
    vegas_canyon.bindPopup("<b>The Grand Canyon</b><br>The Grand Canyon is an immense natural wonder, with its depth revealing millions of years of geological history and can be accessed by walking tours and helicopter tours").openPopup();

    var vegas_fremont = L.marker([36.1558, -115.1178]).addTo(mymap);
    vegas_fremont.bindPopup("<b>Fremont Street</b><br>Fremont Street is the oldest area of Las Vegas, with the street itself pedestrian-only and a long stretch covered by a canopy of LED lights which illuminate the street below").openPopup();

    var vegas_strip = L.marker([36.1147, -115.1728]).addTo(mymap);
    vegas_strip.bindPopup("<b>The Strip</b><br>The Strip is the heart of Las Vegas, with a large array of extravagent themed hotels and acting as a centre for gambling and sporting events, the Strip is never quiet").openPopup();




    var iceland_lights = L.marker([63.7805,-20.3011]).addTo(mymap);
    iceland_lights.bindPopup("<b>Hotel Ranga</b><br>Hotel Ranga is one of the best places to witness the Aurora Borealis, only 90 minutes from Reykjavík, with astronomy experiences also on offer using Iceland's largest telescope").openPopup();


    var australia_uluru = L.marker([-25.3444,131.0369]).addTo(mymap);
    australia_uluru.bindPopup("<b>Uluru</b><br>Uluru is one of the natural wonders of the world, a huge stone monolith which is sacred to the indigenous Australians").openPopup();

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
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");
    var popup = L.popup()
        .setLatLng([51.5, -0.09])
        .setContent("I am a standalone popup.")
        .openOn(mymap);
    function berlin_map() {
        mymap.setView([52.5200,13.4050],13);
    }
    function uluru_map() {
        mymap.setView([-25.3444,131.0369],13);
    }
    function rome_map() {
        mymap.setView([41.9028, 12.4964],13);
    }
    function vegas_map() {
        mymap.setView([36.1699, -115.1398],13);
    }
    function rio_map() {
        mymap.setView([-22.9068,-43.1729],13);
    }
    function lights_map() {
        mymap.setView([64.1466,-21.9426],13);
    }
    function paris_map() {
        mymap.setView([48.8566,2.3522],13);
    }