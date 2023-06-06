import Sketch from "@arcgis/core/widgets/Sketch.js";

export const idContainer = 'modal-Dibujar';

export async function initializeSketchWidget() {  
    const sketchWidget = new Sketch();	
	return sketchWidget;
}