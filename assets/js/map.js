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


    var rio_sugarloaf = L.marker([-22.9493,-43.1546]).addTo(mymap);
    rio_sugarloaf.bindPopup("<b>Sugarloaf Mountain</b><br>Sugarloaf Mountain is one of many monolithic mountains lining the water's edge around Rio De Janeiro, offering fantastic panoramic views around the city").openPopup();
    var rio_christ = L.marker([-22.9519,-43.2105]).addTo(mymap);
    rio_christ.bindPopup("<b>Christ the Redeemer</b><br>Christ the Redeemer is one of the most popular spots in Rio, stood above Rio De Janeiro it offers an excellent view of the city and the monument itself").openPopup();
    var rio_museum = L.marker([-22.8944,-43.1795]).addTo(mymap);
    rio_museum.bindPopup("<b>Museu do Amanha</b><br>Museu do Amanha is a museum, following the concept of the world through and anthropologic lense, with one of its five exhibits named 'us'").openPopup();
    var rio_gardens = L.marker([-22.9674,-43.2250]).addTo(mymap);
    rio_gardens.bindPopup("<b>The Botanical Gardens</b><br>The Rio De Janeiro Botanical Gardens cover 54 hectares of land in the south of the city, offering a massive and varied landscape of fauna").openPopup();


    var egypt_pyramids = L.marker([29.9792,31.1342]).addTo(mymap);
    egypt_pyramids.bindPopup("<b>The Great Pyramid of Giza</b><br>The Great Pyramid of Giza is the oldest and largest pyramid in the Giza complex, needing many engineering techniques not used to buld the smaller pyramids because of its size").openPopup();
    var egypt_museum = L.marker([30.0476,31.2336]).addTo(mymap);
    egypt_museum.bindPopup("<b>The Egyptian Museum</b><br>The Egyptian Museum is an extensive collection of Egyptian antiquities, with only a fraction of its 120,000 item colllection on show, it sits just beside the central square of downtown Cairo").openPopup();
    var egypt_souq = L.marker([30.0477,31.2623]).addTo(mymap);
    egypt_souq.bindPopup("<b>Khan el-Khalili (Souq Quarter)</b><br>Khan el-Khalili is a grand bazaar, taking up a labarynthine network of alleyways, the largest of which are given fully to the tourist trade").openPopup();
    var egypt_mosque= L.marker([30.0457,31.2627]).addTo(mymap);
    egypt_mosque.bindPopup("<b>Al-Azhar Mosque</b><br>Al-Azhar Mosque is the leading theological centre of the Islamic world, as one of the oldest surviving mosques and universities in the world").openPopup();


    var paris_tower= L.marker([48.8584,2.2945]).addTo(mymap);
    paris_tower.bindPopup("<b>The Eiffel Tower</b><br>The Eiffel Tower is an iconic monument that was constructed for the 1889 World's Fair, which dominates the skyline of a large portion of the city").openPopup();
    var paris_museum= L.marker([48.8606,2.3376]).addTo(mymap);
    paris_museum.bindPopup("<b>The Louvre Museum</b><br>The Louvre Museum is the world's largest art and historic museum, housing many great works of art such as the Mona Lisa, and is situated near the centre of the city").openPopup();
    var paris_notre= L.marker([48.8530,2.3499]).addTo(mymap);
    paris_notre.bindPopup("<b>The Notre Dame Cathedral</b><br>The Notre Dame Cathedral is currently under renovation until 2024 following a fire which started in the eves, meaning it will be closed, but it's still worth a look as the stone-built gothic architecture still stands proud").openPopup();
    var paris_arc= L.marker([48.8738,2.2950]).addTo(mymap);
    paris_arc.bindPopup("<b>The Arc de Triomphe</b><br>The Arc de Triomphe stands at the western end of the Champs-Élysées, another popular tourism spot, to honour all who fought for france in the Napoleonic wars").openPopup();


    var cape_mountain= L.marker([-33.9668,18.4256]).addTo(mymap);
    cape_mountain.bindPopup("<b>Table Mountain</b><br>Table Mountain, or Maclear's Beacon, is close to Cape Town with a three kilometer level plateau, with access by hiking or by cable car").openPopup();
    var cape_aquarium= L.marker([-33.9080,18.4177]).addTo(mymap);
    cape_aquarium.bindPopup("<b>Two Oceans Aquarium</b><br>Two Oceans Aquarium holds a host of sea creatures from the bountiful Indian and Atlantic Oceans, and are a vital contributor to sealife conservation").openPopup();
    var cape_museum= L.marker([-33.9277,18.4237]).addTo(mymap);
    cape_museum.bindPopup("<b>District Six Museum</b><br>District Six Museum is an institution focused at looking at the local people and working in no small part as a centre for charitable activities for the area").openPopup();






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
    function cape_map() {
        mymap.setView([-33.9249,18.4241],13);
    }
    function dubai_map() {
        mymap.setView([25.2048,55.2708],13);
    }
    function cairo_map() {
        mymap.setView([30.0444,31.2357],13);
    }