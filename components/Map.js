import MapView from '@arcgis/core/views/MapView';
import WebMap from "@arcgis/core/WebMap";
import RouteLayer from "@arcgis/core/layers/RouteLayer.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
//import ElevationLayer from "@arcgis/core/layers/ElevationLayer";
//import Ground from "@arcgis/core/Ground.js";
import esriConfig from "@arcgis/core/config";

export const routeLayer = new RouteLayer();	

/*export const elevationLayer = new ElevationLayer({
	url: "http://elevation.arcgis.com/arcgis/rest/services/Tools/ElevationSync/GPServer/Profile",
});*/

export const sketchGraphicsLayer = new GraphicsLayer();

esriConfig.apiKey = "AAPK23273e8c774747289098022e81dfe056Nzwr73L0kJGoF8xWRGRN16Q5zocrRhQ7BEbT7xSCX0KgLdZgUgiVHiRhejwWIb-x";

export const webmap = new WebMap({
	portalItem: {
		id: "3e9ef81d533a4aa3b77b4272680b6e28",
		portal: {
			url: "https://hermes2.invias.gov.co/portal"
		}
	},
	ground: "world-elevation",
	/*ground: new Ground({
		layers: [ elevationLayer ]
	}),*/
	layers: [ routeLayer, sketchGraphicsLayer ]
  });
 
const app = {
	map: webmap,	
	ui: {
		components: ["zoom"]
	}
};
           
export let view = new MapView(app);

export async function initializeMap(container) {
	view.container = container;
	return view;
}