import FeatureTable from "@arcgis/core/widgets/FeatureTable.js";
import FeatureTableVM from "@arcgis/core/widgets/FeatureTable/FeatureTableViewModel.js";

export const idContainer = 'bottom-bar-container';

export async function initializeFeatureTableViewModel() {
    const FeatureTableViewModel = new FeatureTableVM();
    return FeatureTableViewModel;
}

export async function initializeAttributeTableWidget() {  
    const AttributeTableWidget = new FeatureTable();
	return AttributeTableWidget;
}