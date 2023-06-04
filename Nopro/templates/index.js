var apiKey = 'AIzaSyAZU3ZmLIukJCl_5Wx2vXRnI-DvMbH9tL8';

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15
  });

  function navigateToLocation(location) {
    map.panTo(location);
    map.setZoom(15);
  }

  var volunteerButton = document.getElementById('button-volunteer');
  var volunteerLocation = { lat: 40.7128, lng: -74.0060 };
  var volunteerMarker = new google.maps.Marker({
    position: volunteerLocation,
    map: map,
    title: 'Volunteer Activities'
  });
  volunteerButton.addEventListener('click', function() {
    navigateToLocation(volunteerLocation);
  });

  var sportsButton = document.getElementById('button-sports');
  var sportsLocation = { lat: 51.5074, lng: -0.1278 };
  var sportsMarker = new google.maps.Marker({
    position: sportsLocation,
    map: map,
    title: 'Sports Tournament'
  });
  sportsButton.addEventListener('click', function() {
    navigateToLocation(sportsLocation);
  });

  var exchangeButton = document.getElementById('button-exchange');
  var exchangeLocation = { lat: 35.6895, lng: 139.6917 };
  var exchangeMarker = new google.maps.Marker({
    position: exchangeLocation,
    map: map,
    title: 'Exchange Event'
  });
  exchangeButton.addEventListener('click', function() {
    navigateToLocation(exchangeLocation);
  });

  main();
}

async function main() {
  try {
    const response1 = await fetch("http://localhost:5000/events/0", { mode: 'cors' });
    const jsonData1 = await response1.json();
    console.log(jsonData1);
    var sportText = document.getElementById('sport-text');
    sportText.innerText = jsonData1.Title;
    var sportDate = document.getElementById('sport-date');
    sportDate.innerText = jsonData1.Date;
    var sportTime = document.getElementById('sport-time');
    sportTime.innerText = jsonData1.Time;
    var sportLocation = document.getElementById('sport-location');
    sportLocation.innerText = jsonData1.Location;

    const response2 = await fetch("http://localhost:5000/events/1", { mode: 'cors' });
    const jsonData2 = await response2.json();
    console.log(jsonData2);
    var volunteerText = document.getElementById('volunteer-text');
    volunteerText.innerText = jsonData2.Title;
    var volunteerDate = document.getElementById('volunteer-date');
    volunteerDate.innerText = jsonData2.Date;
    var volunteerTime = document.getElementById('volunteer-time');
    volunteerTime.innerText = jsonData2.Time;
    var volunteerLocation = document.getElementById('volunteer-location');
    volunteerLocation.innerText = jsonData2.Location;

    const response3 = await fetch("http://localhost:5000/events/2", { mode: 'cors' });
    const jsonData3 = await response3.json();
    console.log(jsonData3);
    var exchangeText = document.getElementById('exchange-text');
    exchangeText.innerText = jsonData3.Title;
    var exchangeTime = document.getElementById('exchange-time');
    exchangeTime.innerText = jsonData3.Date;
    var exchangeDate = document.getElementById('exchange-date');
    exchangeDate.innerText = jsonData3.Time;
    var exchangeLocation = document.getElementById('exchange-location');
    exchangeLocation.innerText = jsonData3.Location;
  } catch (error) {
    console.error(error);
  }
}

window.initMap = initMap;
