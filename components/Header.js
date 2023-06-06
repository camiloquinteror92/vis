import React, { useContext, useRef, useEffect } from 'react';
import DropdownMenu from './DropdownMenu';
import InviasLogo from '../styles/assets/invias-logo.png';
import { AppContext } from '../AppContext';
import { SidebarElement, SidebarService } from 'sidebarjs';

function Header() {
  const { state, dispatch } = useContext(AppContext);
  const searchDivRef = useRef(null);
  const directionsDivRef = useRef(null);
  const peajesTableDivRef = useRef(null);
  const inicidentesTableDivRef = useRef(null);

  const leftDropdownOptions = {
    title: 'Consultas',
    options: ['Tabla de atributos', 'Accidentalidad', 'Consultas red vial'],
    ids: [1, 2, 3]   
  };
  const centerDropdownOptions = {
    title: 'Herramientas',
    options: ['Añadir datos', 'Ir a', 'Imprimir'],
    ids: [4, 5, 6]   
  }    
  const rightDropdownOptions = {
    title: 'Opciones de vista',
    options: ['Leyenda', 'Capas', 'Dibujar', 'Street view', 'Perfil de elevación', 'Galería de mapas'],
    ids: [7, 8, 9, 10, 11, 12]   
  }   

  useEffect(() => {    
    dispatch({
      type: 'ADD_SEARCH_WIDGET',
      payload: {       
        searchWidgetContainer: searchDivRef.current,
        addedWidget: 'Búsqueda',
        //activeOptions: ['Búsqueda']
      },
    });

    dispatch({
      type: 'ADD_DIRECTIONS_WIDGET',
      payload: {       
        directionsWidgetContainer: directionsDivRef.current,
        addedWidget: 'Direcciones',
        //activeOptions: [...state.activeOptions, 'Direcciones']
      },
    }); 

    const sidebarjs = new SidebarElement({
           
    });

  }, [dispatch]);
   
  return (   
    <div className='invias-app-header'>  
      <img id='invias-logo' src={ InviasLogo } alt="Logo de INVIAS"/>
      <div className='logo-separator'></div> 
      <div className='invias-header-logo'>        
        <div className='text-mapa-de'>Mapa de</div>
        <div className='text-carreteras'>carreteras</div>
      </div>
      <div className='main-widget-button'> 
        <button sidebarjs-toggle="leftSidebarName">Viajero Seguro</button> 
      </div>      
      <div className='invias-header-input' id='search-div' ref={ searchDivRef }>
          {/* <input className='search-address' type='text' placeholder='Buscar dirección o lugar'></input>
          <button  className='search-button'></button>  */}
      </div>
      <div className='invias-header-dropdowns'>
         <DropdownMenu config={ leftDropdownOptions } />
         <DropdownMenu config={ centerDropdownOptions } />
         <DropdownMenu config={ rightDropdownOptions } />
         <div className='about-link'>Acerca de</div>
      </div>
      <div sidebarjs="leftSidebarName" id='left-side--widget-container'>
        <div className='side-bar-header'>
          <h4>Programe su ruta</h4>         
        </div>
        <div id='directions-widget-container' ref={ directionsDivRef }>
          <div id='peajes-table-container' ref={ peajesTableDivRef }></div>
          <div id='incidentes-table-container' ref={ inicidentesTableDivRef }></div>
        </div>
      </div>          
    </div>
  );
}

export default Header;