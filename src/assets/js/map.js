
;(function($){

		  function initMap() {
		  	var mapDiv = document.getElementById('map');

		  	if(mapDiv === null) return;

		  	//	poltavaAdress = mapDiv.innerHTML;
			var poltava = {lat: 49.568528, lng: 34.585432};
			          var map = new google.maps.Map(mapDiv, {
			            zoom: 17,
			            center: poltava,
			            disableDefaultUI: true,//отключает весь пользовательский интерфейс по умолчанию
			            draggable: false,//предотвращает перетаскивание карты
			            //mapTypeId: google.maps.MapTypeId.SATELLITE//вид со спутника

			           /* styles: [
			                        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
			                        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
			                        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
			                        {
			                          featureType: 'administrative.locality',
			                          elementType: 'labels.text.fill',
			                          stylers: [{color: '#d59563'}]
			                        },
			                        {
			                          featureType: 'poi',
			                          elementType: 'labels.text.fill',
			                          stylers: [{color: '#d59563'}]
			                        },
			                        {
			                          featureType: 'poi.park',
			                          elementType: 'geometry',
			                          stylers: [{color: '#263c3f'}]
			                        },
			                        {
			                          featureType: 'poi.park',
			                          elementType: 'labels.text.fill',
			                          stylers: [{color: '#6b9a76'}]
			                        },
			                        {
			                          featureType: 'road',
			                          elementType: 'geometry',
			                          stylers: [{color: '#38414e'}]
			                        },
			                        {
			                          featureType: 'road',
			                          elementType: 'geometry.stroke',
			                          stylers: [{color: '#212a37'}]
			                        },
			                        {
			                          featureType: 'road',
			                          elementType: 'labels.text.fill',
			                          stylers: [{color: '#9ca5b3'}]
			                        },
			                        {
			                          featureType: 'road.highway',
			                          elementType: 'geometry',
			                          stylers: [{color: '#746855'}]
			                        },
			                        {
			                          featureType: 'road.highway',
			                          elementType: 'geometry.stroke',
			                          stylers: [{color: '#1f2835'}]
			                        },
			                        {
			                          featureType: 'road.highway',
			                          elementType: 'labels.text.fill',
			                          stylers: [{color: '#f3d19c'}]
			                        },
			                        {
			                          featureType: 'transit',
			                          elementType: 'geometry',
			                          stylers: [{color: '#2f3948'}]
			                        },
			                        {
			                          featureType: 'transit.station',
			                          elementType: 'labels.text.fill',
			                          stylers: [{color: '#d59563'}]
			                        },
			                        {
			                          featureType: 'water',
			                          elementType: 'geometry',
			                          stylers: [{color: '#17263c'}]
			                        },
			                        {
			                          featureType: 'water',
			                          elementType: 'labels.text.fill',
			                          stylers: [{color: '#515c6d'}]
			                        },
			                        {
			                          featureType: 'water',
			                          elementType: 'labels.text.stroke',
			                          stylers: [{color: '#17263c'}]
			                        }
			                      ]//стиль карты ночь*/

			          });
			          var marker = new google.maps.Marker({
			            position: poltava,
			            map: map,
			            animation: google.maps.Animation.BOUNCE,//для того аби постійно пригав
			            icon: 'ion-android-pin'// для задавання кастомного курсора

			          });


		            /*var marker2 = new google.maps.Marker({
		              position: {lat: 49.568528, lng: 34.588432},
		              map: map,
		              animation: google.maps.Animation.BOUNCE,
		              icon: './img/beetroot.svg'

		            }); */ /*if we wont two or more marers*/

			          var infowindow = new google.maps.InfoWindow({
			              content: poltavaAdress
			            });

			          infowindow.open(map, marker); //вставка надписи над изображением

			      }
			          window.onload = initMap;






})(jQuery);

;(function(){


function initMap() {

	var mapDiv = document.querySelector('.ba-map');
    if (mapDiv === null) return;

	var	address = mapDiv.innerHTML;



	var madrid = {
		lat: 49.598528, lng: 34.585432
	};


	var baMap = new google.maps.Map(mapDiv, {
		zoom: 16,
		center: madrid ,
		disableDefaultUI: true,
		styles: [
		{
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#f5f5f5"
			}
			]
		},
		{
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#616161"
			}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"color": "#f5f5f5"
			}
			]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#bdbdbd"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#eeeeee"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#757575"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#e5e5e5"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#9e9e9e"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#ffffff"
			}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#757575"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#dadada"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#616161"
			}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#9e9e9e"
			}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#e5e5e5"
			}
			]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#eeeeee"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#c9c9c9"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#9e9e9e"
			}
			]
		}
		]
	});



	var marker2 = new google.maps.Marker({
		position: madrid,
		map: baMap,
		animation: google.maps.Animation.DROP,
		icon: 'https://commons.wikimedia.org/wiki/File%3AMap_marker_font_awesome.svg'
	});


}

window.onload = initMap;

})();
