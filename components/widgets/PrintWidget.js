import Print from "@arcgis/core/widgets/Print.js";


export const idContainer = 'modal-Imprimir';

export async function initializePrintWidget() {  
    const PrintWidget = new Print();	
	return PrintWidget;
}