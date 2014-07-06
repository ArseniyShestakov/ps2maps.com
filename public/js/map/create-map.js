(function(){

	// Custom Projection
	L.Projection.LatLon = {
		project: function (latlng) {
			return new L.Point(latlng.lat, latlng.lng);
		},
		unproject: function (point) {
			return new L.LatLng(point.x, point.y);
		},
		bounds: L.bounds([0,0],[256,256])
	};

	// Custom CRS
	L.CRS.Screen = L.extend({}, L.CRS, {
		projection: L.Projection.LatLon,
		transformation: new L.Transformation(1, 0, 1, 0),
		scale: function (zoom) {
			return Math.pow(2, zoom);
		},
		wrapLat: null,
		wrapLng: null
	});

	// Map Creation
	ps2maps.map = L.map('map',
	{
		crs: L.CRS.Screen,
		minZoom: -10,
		maxZoom: 7,
		attributionControl: false,
	})
	// Prevent Right-click context menu
	.on('contextmenu', function(e){});

	// Tile Layer
	var tilesUrl = tilesCdn + "/tiles/" + continent.slug + tileVersion + "/zoom{z}/tile_{z}_{x}_{y}.jpg";
	L.tileLayer(tilesUrl, {
		subdomains: '0123',
		noWrap: true,
		continuousWorld: true
	}).addTo(ps2maps.map);

	// Canvas Tiles (for debugging)
	// var canvasTiles = L.tileLayer.canvas({
	//     minZoom: 0,
	//     maxZoom: 16,
	//     attribution: 'Map data &copy; FooBar',
	//     continuousWorld: true,
	//     tms: true
	// });

	// canvasTiles.drawTile = function(canvas, point, zoom) {
	//     var context = canvas.getContext('2d');

	//     context.beginPath();
	//     context.rect(0, 0, 256, 256);
	//     context.lineWidth = 2;
	//     context.strokeStyle = 'white';
	//     context.stroke();

	//     context.font="20px Arial";
	//     context.fillStyle = 'white';
	//     context.fillText("x:" + point.x + " y:" + point.y + " z:" + zoom, 80, 140);
	// }

	// // add the layer to the map
	// canvasTiles.addTo(ps2maps.map);

	//Determine preset or default view
	var view = window.location.hash.slice(1,-1).split(','),
		lat,
		lng,
		zoom;

	// Do values exist and are they valid numbers?
	if ( view[0] && view[1] && view[2] && !isNaN(view[0]) && !isNaN(view[1]) && !isNaN(view[2]) ) {
		lat = view[0];
		lng = view[1];
		zoom = view[2];
	} else { // Use default values
		lat = ps2maps.defaultView.lat;
		lng = ps2maps.defaultView.lng;
		zoom = ps2maps.defaultView.zoom;
	}

	// Set the view
	ps2maps.map.setView([lat,lng],zoom);

	// Set the move & zoom handler
	// Do this after setting intial view or else URL is appended with default view hash
	ps2maps.map.on('moveend', ps2maps.mapMoveZoom.bind(ps2maps));

})();
