import React, { useState, useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { AppContext } from '../AppContext';

const BurguerMenu = () => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const handleClickOptions = (event) => {
    console.log(event.target.innerHTML);
    let option = event.target.innerHTML;
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
        console.log("capas")
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
      }
    }    
  }

  const handleClickArrows = (event) => {
    event.preventDefault();
    let arrow = event.target;
    let index = event.target.attributes[0].value;
    if (index === "arrow-mobile-1") {      
      if (!clicked1) {
        arrow.style.transform = 'rotate(180deg)';
        setClicked1(true);
      } else {
        arrow.style.transform = 'rotate(360deg)';
        setClicked1(false);
      }
    } else if (index === "arrow-mobile-2") {
      setClicked2(prevState => !prevState.clicked2);
      if (!clicked2) {
        arrow.style.transform = 'rotate(180deg)';
        setClicked2(true);
      } else {
        arrow.style.transform = 'rotate(360deg)';
        setClicked2(false);
      }
    } else if (index === "arrow-mobile-3") {
      if (!clicked3) {
        arrow.style.transform = 'rotate(180deg)';
        setClicked3(true);
      } else {
        arrow.style.transform = 'rotate(360deg)';
        setClicked3(false);
      }
    }
  }

  return (
      <div className="menu-burguer-container">
        <Menu right>
            <div className="item-menu-mobile" >
                <div className="item-capsule">
                <div id="home" className="menu-item bm-item" >Consultas</div>
                <div id="arrow-mobile-1" className="item-arrow-mobile" onClick={ handleClickArrows }></div>
                </div>
                <ul className="actualidad-list subItems-mobile" hidden={ clicked1 ?  false : true }>                        
                  <li onClick={handleClickOptions}>Tabla de atributos</li>
                  <li onClick={handleClickOptions}>Accidentalidad</li>
                  <li onClick={handleClickOptions}>Consultas red vial</li>                                            
                </ul>
            </div>
            <div className="item-menu-mobile">
                <div className="item-capsule">              
                <div id="tools" className="menu-item bm-item">Herramientas</div>
                <div id="arrow-mobile-2" className="item-arrow-mobile" onClick={ handleClickArrows }></div>
                </div>  
                <ul className="bienestar-list subItems-mobile" hidden={ clicked2 ?  false : true }>                        
                  <li onClick={ handleClickOptions }>Añadir datos</li>                       
                  <li onClick={ handleClickOptions }>Ir a</li>                       
                  <li onClick={ handleClickOptions }>Imprimir</li>                                        
                </ul>
            </div>
            <div className="item-menu-mobile">
                <div className="item-capsule">
                <div id="look" className="menu-item bm-item">Opciones de vista</div>
                <div id="arrow-mobile-3" className="item-arrow-mobile" onClick={ handleClickArrows }></div>
                </div>  
                <ul className="entorno-list subItems-mobile" hidden={ clicked3 ?  false : true }>                        
                        <li onClick={ handleClickOptions }>Leyenda</li>                       
                        <li onClick={ handleClickOptions }>Capas</li>                       
                        <li onClick={ handleClickOptions }>Dibujar</li>                       
                        <li onClick={ handleClickOptions }>Street View</li>                       
                        <li onClick={ handleClickOptions }>Perfil de elevación</li>                       
                        <li onClick={ handleClickOptions }>Galería de mapas</li>                        
                    </ul>
            </div>              
        </Menu>      
      </div>
    );
  }

export default BurguerMenu;