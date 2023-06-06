import FeatureTable from "@arcgis/core/widgets/FeatureTable.js";

const IncidentsTableWidget = ({ view, layer, idContainer }) => {
  const featureTable = new FeatureTable({
    view: view,
    layer: layer,
    container: idContainer,
  });
  featureTable.on("selection-change", (event) => {
    // Lógica para manejar cambios de selección en la tabla de atributos
  });  
};

export default IncidentsTableWidget;
