import { useState } from "react";
import { FeatureLayer, CSVLayer, GeoJSONLayer, KMLLayer } from "@arcgis/core/layers";

function AddDataWidget({ view }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFormat, setSelectedFormat] = useState("featureLayer");

  function handleFileInputChange(event) {
    setSelectedFiles(Array.from(event.target.files));
  }

  function handleFormatSelectChange(event) {
    setSelectedFormat(event.target.value);
  }

  async function handleAddButtonClick() {
    let layer;

    if (selectedFormat === "featureLayer") {
      layer = await FeatureLayer.fromUrl(selectedFiles[0]);
    } else if (selectedFormat === "csvLayer") {
      layer = await CSVLayer.fromFiles(selectedFiles);
    } else if (selectedFormat === "geojsonLayer") {
      layer = await GeoJSONLayer.fromFiles(selectedFiles);
    } else if (selectedFormat === "kmlLayer") {
      layer = await KMLLayer.fromUrls(selectedFiles.map((file) => file.name));
    } else if (selectedFormat === "shapefileLayer") {
      //layer = await ShapefileLayer.fromZip(selectedFiles[0]);
    }

    view.map.add(layer);

    setSelectedFiles([]);
    setSelectedFormat("featureLayer");
  }

  return (
    <div className="esri-widget esri-widget--button">
      <input type="file" multiple onChange={handleFileInputChange} />
      <select value={selectedFormat} onChange={handleFormatSelectChange}>
        <option value="featureLayer">Feature Layer</option>
        <option value="csvLayer">CSV Layer</option>
        <option value="geojsonLayer">GeoJSON Layer</option>
        <option value="kmlLayer">KML Layer</option>
        <option value="shapefileLayer">Shapefile Layer</option>
      </select>
      <button disabled={selectedFiles.length === 0} onClick={handleAddButtonClick}>
        Add
      </button>
    </div>
  );
}

export default AddDataWidget;
