import ElevationProfile from "@arcgis/core/widgets/ElevationProfile.js";

export const idContainer = 'modal-Perfil-de-elevación';

export async function initializeElevationProfileWidget() {  
    const ElevationProfileWidget = new ElevationProfile({
        profiles: [{
            // displays elevation values from Map.ground
            type: "ground", //autocasts as new ElevationProfileLineGround()
          }, {
            // displays elevation values from the input line graphic
            type: "input", //autocasts as new ElevationProfileLineInput()
          }, {
            // displays elevation values from a SceneView
            type: "view" //autocasts as new ElevationProfileLineView()
          }]
    });	
	return ElevationProfileWidget;
}