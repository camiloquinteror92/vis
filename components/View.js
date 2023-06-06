import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

const webmap = new WebMap({
    portalItem: {
        id: "3e9ef81d533a4aa3b77b4272680b6e28",
        portal: {
            url: "https://hermes2.invias.gov.co/portal"
        }
    }
});

export const MAP_VIEW_OPTIONS = {
  container: 'mapView',
  map: webmap,
};

export const mapview = new MapView(MAP_VIEW_OPTIONS);