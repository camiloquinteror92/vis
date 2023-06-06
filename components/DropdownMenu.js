import React, { useEffect, useContext } from 'react';
import Modal from './widgets/ModalWidget';
import { AppContext } from '../AppContext';

const DropdownMenu = (props) => {
  //const [activeOptions, setActiveOptions] = useState([]); 
  const { state, dispatch } = useContext(AppContext);  

  const handleOptionClick = (e, option) => {      
    if (state.activeOptions && !state.activeOptions.includes(option)) {      
      if ( option === 'Galería de mapas' ) {              
          dispatch({
            type: 'ADD_BASEMAP_GALLERY_WIDGET',
            payload: {       
              showBasemapGallery: true,
              addedWidget: option,
              activeOptions: [...state.activeOptions, option],
              baseMapGalleryIsMounted: state.baseMapGalleryIsMounted
            }
          });      
      } else if ( option === 'Dibujar' )  {
        dispatch({
          type: 'ADD_SKETCH_WIDGET',
          payload: {       
            showSketchWidget: true,
            addedWidget: option,
            activeOptions: [...state.activeOptions, option],
            sketchWidgetIsMounted: state.sketchWidgetIsMounted,
          }
        });
      } else if ( option === 'Capas' )  {
        dispatch({
          type: 'ADD_LAYERLIST_WIDGET',
          payload: {       
            showLayerListWidget: true,
            addedWidget: option,
            activeOptions: [...state.activeOptions, option],
            layerListWidgetIsMounted: state.layerListWidgetIsMounted
          }
        });
      } else if ( option === 'Leyenda' ) {
        dispatch({
          type: 'ADD_LEGEND_WIDGET',
          payload: {       
            showLegendWidget: true,
            addedWidget: option,
            activeOptions: [...state.activeOptions, option],
            legendWidgetIsMounted: state.legendWidgetIsMounted
          }
        });
      } else if ( option === 'Perfil de elevación' ) {
        dispatch({
          type: 'ADD_ELEVATION_PROFILE_WIDGET',
          payload: {
            showElevationProfileWidget: true,
            addedWidget: option,
            activeOptions: [...state.activeOptions, option],
            elevationProfileWidgetIsMounted: state.elevationProfileWidgetIsMounted
          }
        });
      } else if ( option === 'Imprimir' ) {
        dispatch({
          type: 'ADD_PRINT_WIDGET',
          payload: {       
            showPrintWidget: true,
            addedWidget: option,
            activeOptions: [...state.activeOptions, option],
            printWidgetIsMounted: state.printWidgetIsMounted
          }
        });
      } else if ( option === 'Ir a') {        
        dispatch({
          type: 'ADD_GOTO_WIDGET',
          payload: {       
            showGoToWidget: true,
            //goToWidgetIsMounted: true,
            //goToContainer: dynamicContainer.current
          },
        });
      } else if ( option === 'Añadir datos') {
        dispatch({
          type: 'ADD_INCLUDE_DATA_WIDGET',
          payload: {       
            showAddDataWidget: true,
            addedWidget: option,
            activeOptions: [...state.activeOptions, option]            
          }
        });
      } else if (option === 'Tabla de atributos') {
        dispatch({
          type: 'ADD_ATTRIBUTE_TABLE_WIDGET',
          payload: {       
            showAttributeTableWidget: true,
            addedWidget: 'Tabla de atributos',
            activeOptions: [...state.activeOptions, 'Tabla de atributos'],
            attributeTableWidgetIsMounted: true
          }
        });   
      }
    }    
  };

  useEffect(() => {
    let goToDropDownButton = document.getElementById('ir-a');
    goToDropDownButton.addEventListener('click', (e) => {           
      if (state.activeOptions && !state.activeOptions.includes('Ir a')) {      
        //console.log(state.goToWidgetIsMounted)
        dispatch({
          type: 'ADD_GOTO_WIDGET',
          payload: {            
            showGoToWidget: true,
            addedWidget: 'Ir a',
            activeOptions: [ ...state.activeOptions, 'Ir a'],
            //goToWidgetIsMounted: false
          },
        })
      }
    });    
  }, [])

  const normalizedID = props.config.title.toLowerCase().replaceAll(' ', '-'); 
    
    return (
      <>
        <div className="dropdown-menu-container">
          <div className="dropdown-button-container" id={ normalizedID.toString() }>
            <button className="dropdown-toggle-button">{props.config.title}</button>
          </div>
          <ul className="dropdown-box-options">
            {
              props.config.options.map((option, i) => (
                <li
                  key={`option-${i}`}
                  onClick={ (e) => handleOptionClick(e, option) }
                  id={option.toLowerCase().replaceAll(' ', '-')}
                  className="dropdown-option"
                >
                  { option }
                </li>
              ))
            }
          </ul>
        </div>
        {
          props.config.options.map((option, i) => {               
            return (          
                <Modal              
                  id={`modal-${option}`.replaceAll(' ', '-')}
                  key={`modal-${i}-${option.replaceAll(' ', '-')}`}
                  modalkey={`modal-${i}`}              
                  title={ option }                                
                />          
            );
          })
        }
      </>
    );
  };  
  
export default DropdownMenu;