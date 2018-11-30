import './index.scss';
import carto from '@carto/carto-vl';

const sources = {
	'collection-point': {
		'type': 'FeatureCollection',
		'features': [{
			'type': 'Feature',
			'geometry': {
				'type': 'Point',
				'coordinates': [0, 0]
			},
			'properties': {}
		}, {
			'type': 'Feature',
			'geometry': {
				'type': 'Point',
				'coordinates': [10, 10]
			},
			'properties': {}
		}]
	},
	'line-string': {
		'type': 'Feature',
		'geometry': {
			'type': 'LineString',
			'coordinates': [
				[0, 0],
				[0, 60],
				[50, 50],
				[50, 0]
			]
		},
		'properties': {}
	},
	'multi-line-string': {
		'type': 'Feature',
		'geometry': {
			'type': 'MultiLineString',
			'coordinates': [
				[
					[0, 0],
					[0, 50]
				],
				[
					[50, 0],
					[50, 50]
				]
			]
		},
		'properties': {}
	},
	'multi-polygon': {
		'type': 'Feature',
		'geometry': {
			'type': 'MultiPolygon',
			'coordinates': [
				[
					[
						[0, 0],
						[50, 50],
						[0, 50],
						[0, 0]
					],
					[
						[10, 20],
						[10, 40],
						[30, 40],
						[10, 20]
					]
				]
			]
		},
		'properties': {}
	},
	'point': {
		'type': 'Feature',
		'geometry': {
			'type': 'Point',
			'coordinates': [0, 0]
		},
		'properties': {}
	},
	'points-with-5-properties': {
		'type': 'FeatureCollection',
		'features': [{
			'type': 'Feature',
			'geometry': {
				'type': 'Point',
				'coordinates': [-20, 0]
			},
			'properties': {
				'p0': 1,
				'p1': 2,
				'p2': 3,
				'p3': 4,
				'p4': 5
			}
		}]
	},
	'points': {
		'type': 'FeatureCollection',
		'features': [{
			'type': 'Feature',
			'geometry': {
				'type': 'Point',
				'coordinates': [-20, 0]
			},
			'properties': {
				'numeric': 0,
				'cat': '0'
			}
		}, {
			'type': 'Feature',
			'geometry': {
				'type': 'Point',
				'coordinates': [0, 0]
			},
			'properties': {
				'numeric': 5,
				'cat': '1'
			}
		}, {
			'type': 'Feature',
			'geometry': {
				'type': 'Point',
				'coordinates': [20, 0]
			},
			'properties': {
				'numeric': 10,
				'cat': '2'
			}
		}]
	},
	'polygon': {
		'type': 'Feature',
		'geometry': {
			'type': 'Polygon',
			'coordinates': [
				[
					[0, 0],
					[50, 50],
					[0, 50],
					[0, 0]
				],
				[
					[10, 20],
					[10, 40],
					[30, 40],
					[10, 20]
				]
			]
		},
		'properties': {}
	}
};

const map = new carto.Map({
	container: 'map',
	background: 'black'
});

const source = new carto.source.GeoJSON(sources['points']);
const viz = new carto.Viz('color: ramp(globalQuantiles($numeric, 3), PRISM), width: 50');
const layer = new carto.Layer('layer', source, viz);

layer.addTo(map);