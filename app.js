
    mapboxgl.accessToken='pk.eyJ1IjoiYXJ0a2FzdHJhdGkxIiwiYSI6ImNsaTBzYXFlNzFxa2UzZG50Nm9qY2YzeHgifQ.XWWkiFa1_H--ojLoirLVsA';
   
    let loc= [14.43484270776182, 50.087043829668964];

    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/artkastrati1/cli0t1szx02gq01pgd7qdh390',
      center: loc,
      zoom: 14
    });

    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());

    let marker = document.createElement('div');
    marker.id = 'marker';

    let popup = new mapboxgl.Popup({ offset: 70 })
      .setHTML('<div id="popup">The place to be at!</div>');

    new mapboxgl.Marker(marker, { anchor: 'bottom' })
      .setLngLat(loc)
      .setPopup(popup)
      .addTo(map);
    
      
    

  (() => {
    const hamburger = document.querySelector('#hamburger');
    const nav = document.querySelector('nav');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      nav.classList.toggle('open');
    });
  })();