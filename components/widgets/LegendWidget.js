import Legend from "@arcgis/core/widgets/Legend.js";

export const idContainer = 'modal-Leyenda';

export async function initializeLegendWidget() {  
    const LegendWidget = new Legend();
	return LegendWidget;
}