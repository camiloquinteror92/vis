import { createRoot } from 'react-dom/client';
import Directions from "@arcgis/core/widgets/Directions.js";
import DirectionsVM from "@arcgis/core/widgets/Directions/DirectionsViewModel.js";
import BufferParameters from "@arcgis/core/rest/support/BufferParameters.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine.js";
import * as projection from "@arcgis/core/geometry/projection.js";
//import Graphic from "@arcgis/core/Graphic.js";
import peajesMarker from '../../styles/assets/peajes-symbol.png';
import incidentesMarker from '../../styles/assets/incidentes-symbol.png';
import PeajesTable from "./PeajesTableWidget";
import IncidentsTableWidget from './IncidentsTableWidget';
import FeatureTable from "@arcgis/core/widgets/FeatureTable.js";
import Popup from "@arcgis/core/widgets/Popup.js";

import Point from "@arcgis/core/geometry/Point.js";

const reprojectBuffer = (buffer, spatialReference) => {    
    const projectedBuffer = projection.project(buffer, spatialReference);
    return projectedBuffer;
};

const getPeajesAndEvents = async (lastRoute, view) => {
    let peajesAndIncidents = {
      peajes: [],
      incidentes: []
    };
  
    const bufferDistance = 50; // en metros
    const bufferParams = new BufferParameters({
      distances: [bufferDistance],
      unit: "meters",
      geodesic: true,
      geometries: [lastRoute]
    });
  
    const buffer = geometryEngine.buffer(bufferParams.geometries[0], bufferParams.distances[0], bufferParams.unit, bufferParams.geodesic);
    
    // graficar el buffer
    /*const bufferGraphic = new Graphic({
      geometry: buffer,
      symbol: {
        type: "simple-fill",
        color: [255, 0, 0, 0.2],
        outline: {
          color: [255, 0, 0, 1],
          width: 2
        }
      }
    });
  
    view.graphics.add(bufferGraphic);*/
  
    const capaPeajes = new FeatureLayer({
      url: "https://hermes.invias.gov.co/arcgis/rest/services/N767/consulta767/FeatureServer/4",
    });
  
    const capaEventos = new FeatureLayer({
      url: "https://hermes.invias.gov.co/arcgis/rest/services/N767/consulta767/FeatureServer/0",
    });
  
    const reprojectedBuffer = reprojectBuffer(buffer, capaPeajes.spatialReference);
  
    try {
      await Promise.all([
        capaPeajes.load(),
        capaEventos.load()
      ]);
  
      const queryPeajes = capaPeajes.createQuery();
      queryPeajes.geometry = reprojectedBuffer;
  
      const queryEventos = capaEventos.createQuery();
      queryEventos.geometry = reprojectedBuffer;
      queryEventos.where = "estado = '0'";
  
      const [peajes, incidentes] = await Promise.all([
        capaPeajes.queryFeatures(queryPeajes),
        capaEventos.queryFeatures(queryEventos)
      ]);
  
      peajesAndIncidents.peajes = peajes.features;
      peajesAndIncidents.incidentes = incidentes.features;
    } catch (error) {
      console.error(error);
    }  
    
    return peajesAndIncidents;
  };

const addPeajesAndEventsToMap = (view, points) => {   
    
    const peajesSymbol = {
        type: "picture-marker",
        url: peajesMarker,        
        width: "20px",
        height: "29px"
    };
      
    const eventosSymbol = {
        type: "picture-marker",       
        url: incidentesMarker,
        width: "20.43px",
        height: "30px"
    };
      
    const peajesRenderer = {
        type: "simple",
        symbol: peajesSymbol      
    };
      
    const eventosRenderer = {
        type: "simple",
        symbol: eventosSymbol
    };

    const peajesLayer = new FeatureLayer({
        objectIdField: "OBJECTID",
        //fields: [],
        source: points.peajes,
        geometryType: "point",
        spatialReference: view.spatialReference,
        renderer: peajesRenderer
    });
      
    const eventosLayer = new FeatureLayer({
        objectIdField: "OBJECTID",
        fields: [{
          name: "tipo",
          alias: "tipo",
          type: "small-integer"
        }, {
          name: "departamento",
          alias: "departamento",
          type: "string"
        }, {
          name: "tipo_evento",
          alias: "tipo_evento",
          type: "double"
        }],
        source: points.incidentes,
        geometryType: "point",
        spatialReference: view.spatialReference,
        renderer: eventosRenderer
    });

    view.map.addMany([peajesLayer, eventosLayer]);
    const featureTable = new FeatureTable({
      view: view,
      layer: eventosLayer,
      container: 'incidentes-table-container',
    });

    featureTable.on("selection-change", (event) => {
      console.log(event)
      const graphic = event.added[0];
      const geometry = graphic.geometry;
      
      // Create a new popup and configure its content
      const popup = new Popup({
       // title: graphic.attributes["NOMBRE"],
        //content: `Tipo de evento: ${graphic.attributes["TIPO"]}`,
        location: new Point({
          x: geometry.centroid.x,
          y: geometry.centroid.y,
          spatialReference: geometry.spatialReference
        }),
        autoOpenEnabled: true
      });
    
      // Add the popup to the view and open it
      view.popup = popup;
      view.popup.open();
    });

    const numPeajes = points.peajes.length;
    const peajesTableContainer = document.getElementById('peajes-table-container');
    createRoot(peajesTableContainer).render(<PeajesTable numPeajes={numPeajes} />);

    /*const IncidentsTableContainer = document.getElementById('incidentes-table-container');
    createRoot(IncidentsTableContainer).render(<IncidentsTableWidget features={points.incidentes} />);*/
}

export async function initializeDirectionsWidget() { 
    const directionsViewModel = new DirectionsVM({
      url: "https://hermes.invias.gov.co/arcgis/rest/services/Network/Network7_2/NAServer/Route",
    });

    const directionsWidget = new Directions({
        viewModel: directionsViewModel        
    });
    
    await directionsWidget.when((e) => {        
        directionsViewModel.watch("lastRoute", async (e) => {              
            const mapView = directionsWidget.view;
            const routeGeometry = directionsViewModel.lastRoute.routeInfo.geometry;
            const allEvents = await getPeajesAndEvents(routeGeometry, mapView);
            console.log(allEvents);
            addPeajesAndEventsToMap(mapView, allEvents);
        });
    });

    return directionsWidget;
}