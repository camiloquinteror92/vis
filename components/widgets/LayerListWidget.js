import LayerList from "@arcgis/core/widgets/LayerList.js";

export const idContainer = 'modal-Capas';

export async function initializeLayerListWidget() {  
    const LayerListWidget = new LayerList();	
	return LayerListWidget;
}