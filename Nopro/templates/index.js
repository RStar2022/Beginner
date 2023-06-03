
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
}

async function main() {
	const response = await fetch("http://localhost:5000/events/1", {mode: 'cors'});
	const jsonData = await response.json();

	console.log(jsonData);

	var sportText = document.getElementById('sport-text');
	sportText.innerText = jsonData.Title;
}

window.onload = main;
