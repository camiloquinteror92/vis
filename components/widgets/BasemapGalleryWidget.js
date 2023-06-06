import BasemapGallery from "@arcgis/core/widgets/BasemapGallery.js";

export const idContainer = 'modal-Galería-de-mapas';

export async function initializeBasemapGalleryWidget() {  
    const BasemapGalleryWidget = new BasemapGallery();	
	return BasemapGalleryWidget;
}