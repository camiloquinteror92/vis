import React, { useState, useRef, useEffect, useContext } from 'react';
import { AppContext } from '../../AppContext';
import Draggable from 'react-draggable';

const Modal = ({ title, id }) => {
  const { state, dispatch } = useContext(AppContext);
  const [activeDrags, setActiveDrags] = useState(0);
  const nodeRef = useRef();

  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };

  const dragHandlers = { onStart, onStop };

  const handleCloseModal = (option, id) => {
    let activeWindow = document.getElementById(id);
    activeWindow.style.display = 'none';             
      if ( option === 'Galería de mapas' ) { 
          dispatch({
            type: 'REMOVE_BASEMAP_GALLERY_WIDGET',
            payload: {       
              showBasemapGallery: false,
				      deleteWidget: option,
              activeOptions: [...state.activeOptions.filter(value => value !== option)]		   
            },
          });      
      } else if ( option === 'Dibujar' )  {                
        dispatch({
          type: 'REMOVE_SKETCH_WIDGET',
          payload: {       
            showSketchWidget: false,
				    deleteWidget: option,
            activeOptions: [...state.activeOptions.filter(value => value !== option)]
          },
        });
      } else if ( option === 'Capas' )  {
        dispatch({
          type: 'REMOVE_LAYERLIST_WIDGET',
          payload: {       
            showLayerListWidget: false,
				    deleteWidget: option,
            activeOptions: [...state.activeOptions.filter(value => value !== option)]
          },
        });
      } else if ( option === 'Leyenda' ) {
        dispatch({
          type: 'REMOVE_LEGEND_WIDGET',
          payload: {       
            showLegendWidget: false,
				    deleteWidget: option,
            activeOptions: [...state.activeOptions.filter(value => value !== option)]
          },
        });
      } else if ( option === 'Perfil de elevación' ) {
        dispatch({
          type: 'REMOVE_ELEVATION_PROFILE_WIDGET',
          payload: {
            showElevationProfileWidget: false,
				    deleteWidget: option,
            activeOptions: [...state.activeOptions.filter(value => value !== option)]
          },
        });
      } else if ( option === 'Imprimir' ) {
        dispatch({
          type: 'REMOVE_PRINT_WIDGET',
          payload: {
            showPrintWidget: false,
				    deleteWidget: option,
            activeOptions: [...state.activeOptions.filter(value => value !== option)]
          },
        });
      } else if ( option === 'Ir a') {        
        dispatch({
          type: 'REMOVE_GOTO_WIDGET',
          payload: {       
            showGoToWidget: false,
				    deleteWidget: option,
            activeOptions: [...state.activeOptions.filter(value => value !== option)],
            //goToWidgetIsMounted: false
          },
        });
      }    
  };

  useEffect(() => {
    if (!state.goToContainer && title === 'Ir a') {     
      dispatch({
        type: 'SET_GOTO_NODE',
        payload: {
          goToContainer: nodeRef.current,            
        }
      }) 
    }           
  }, [state.goToContainer, dispatch])
  
  return (
    <Draggable
      nodeRef={ nodeRef }  
      {...dragHandlers}>
        <div
          className="modal scrollbar closed"         
          ref={ nodeRef }
          id={ id.toString() }
        >
          <div className="modal__header">
            <div className='modal-widget-title'>{ title }</div>  
            <button className="modal__button" onClick={ ()=>handleCloseModal(title, id) }>
              X
            </button>          
          </div>          
        </div>
    </Draggable>
  );
};

export default Modal;