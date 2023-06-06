import Search from "@arcgis/core/widgets/Search";

const sources = [
    {
      "layerId": "RedVial_3768_1",
      "url": "https://hermes2.invias.gov.co/server/rest/services/MapaCarreteras/RedVial/MapServer/1",
      "name": "Red Vial",
      "placeholder": "",
      "searchFields": [
        "codigotramo",
        "nombreruta",
        "sector"
      ],
      "displayField": "sector",
      "exactMatch": false,
      "searchInCurrentMapExtent": false,
      "panToScale": false,
      "zoomScale": null,
      "maxSuggestions": 6,
      "maxResults": 6,
      "type": "query"
    },
    {
      "layerId": "Peaje_6827",
      "url": "https://hermes2.invias.gov.co/server/rest/services/MapaCarreteras/Peaje/MapServer/0",
      "name": "Peajes",
      "placeholder": "",
      "searchFields": [
        "nombrepeaje"
      ],
      "displayField": "nombrepeaje",
      "exactMatch": false,
      "searchInCurrentMapExtent": false,
      "panToScale": false,
      "zoomScale": null,
      "maxSuggestions": 6,
      "maxResults": 6,
      "type": "query"
    },
    {
      "layerId": "Puente_984",
      "url": "https://hermes2.invias.gov.co/server/rest/services/MapaCarreteras/Puente/MapServer/0",
      "name": "Puente",
      "placeholder": "",
      "searchFields": [
        "nombre"
      ],
      "displayField": "nombre",
      "exactMatch": false,
      "searchInCurrentMapExtent": false,
      "panToScale": false,
      "zoomScale": null,
      "maxSuggestions": 6,
      "maxResults": 6,
      "type": "query"
    },
    {
      "url": "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
      "name": "Dirección o Lugar",
      "singleLineFieldName": "SingleLine",
      "placeholder": "Dirección o Lugar",
      "countryCode": "COL, CO",
      "panToScale": false,
      "zoomScale": null,
      "maxSuggestions": 6,
      "maxResults": 6,
      "searchInCurrentMapExtent": false,
      "enableLocalSearch": true,
      "localSearchMinScale": 300000,
      "localSearchDistance": 50000,
      "radiusUnit": "meter",
      "type": "locator"
    }
]
export async function initializeSearchWidget() {  
    const searchWidget = new Search({
        sources: sources
    });	
	return searchWidget;
}