/*import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

const { state, dispatch } = useContext(AppContext);  */
export const idContainer = 'modal-Ir-a';

export async function initializeGoToWidget (goToContainer, mapView) {
   
    let decimalSystem = true;
    function createCoordenadasForm() {
        const form = document.createElement('form');
        form.setAttribute('class', 'coordinates-form');
        const decimalCoordinatesContainer = document.createElement('div');
        decimalCoordinatesContainer.id = 'decimal-coordinates-container';
        const decimalLabel = document.createElement('h3');
        decimalLabel.innerHTML = 'Coordenadas decimales';

        const  latitudDecimalContainer = document.createElement('div');
        latitudDecimalContainer.id = 'latitud-decimal-container';

        const longitudDecimalContainer = document.createElement('div');
        longitudDecimalContainer.id = 'longitud-decimal-container';
        /////
        const sexagesimalCoordinatesContainer = document.createElement('div');
        sexagesimalCoordinatesContainer.id = 'sexagesimal-coordinates-container';
        const sexagesimalLabel = document.createElement('h3');
        sexagesimalLabel.innerHTML = 'Coordenadas sexagesimales';

        const sexagesimalLatitudeContainer = document.createElement('div');
        sexagesimalLatitudeContainer.id = 'sexagesimal-latitude';

        const sexagesimalLongitudeContainer = document.createElement('div');
        sexagesimalLongitudeContainer.id = 'sexagesimal-longitude';
        
        
        /////////////////
        //latitud decimal
        const latitudDecimalLabel = document.createElement('label');
        latitudDecimalLabel.setAttribute('for', 'latitud-decimal-input');
        latitudDecimalLabel.textContent = 'Latitud:';
        latitudDecimalContainer.appendChild(latitudDecimalLabel);
      
        const latitudDecimalInput = document.createElement('input');
        latitudDecimalInput.setAttribute('id', 'latitud-decimal-input');
        latitudDecimalInput.setAttribute('type', 'number');
        latitudDecimalInput.setAttribute('name', 'latitudDecimal');
        latitudDecimalInput.setAttribute('step', '0.000001');
        latitudDecimalInput.setAttribute('required', true);
        latitudDecimalInput.classList.add('effect-20');  
        latitudDecimalContainer.appendChild(latitudDecimalInput);
        //////////////////
        //longitud 
        const longitudDecimalLabel = document.createElement('label');
        longitudDecimalLabel.setAttribute('for', 'longitud-decimal-input');
        longitudDecimalLabel.textContent = 'Longitud:';
        longitudDecimalContainer.appendChild(longitudDecimalLabel);
      
        const longitudDecimalInput = document.createElement('input');
        longitudDecimalInput.setAttribute('id', 'longitud-decimal-input');
        longitudDecimalInput.setAttribute('type', 'number');
        longitudDecimalInput.setAttribute('name', 'longitudDecimal');
        longitudDecimalInput.setAttribute('step', '0.000001');
        longitudDecimalInput.setAttribute('required', true);
        longitudDecimalInput.classList.add('effect-20');  
        longitudDecimalContainer.appendChild(longitudDecimalInput);
        ///////////////////////
        // Latitud (sexagesimal)
        const latitudSexagesimalLabel = document.createElement('label');
        latitudSexagesimalLabel.setAttribute('for', 'latitud-sexagesimal-grados-input');
        latitudSexagesimalLabel.textContent = 'Latitud:';
        sexagesimalLatitudeContainer.appendChild(latitudSexagesimalLabel);

        const latitudSexagesimalGradosInput = document.createElement('input');
        latitudSexagesimalGradosInput.setAttribute('id', 'latitud-sexagesimal-grados-input');
        latitudSexagesimalGradosInput.setAttribute('type', 'number');
        latitudSexagesimalGradosInput.setAttribute('name', 'latitudSexagesimalGrados');
        latitudSexagesimalGradosInput.setAttribute('min', 0);
        latitudSexagesimalGradosInput.setAttribute('max', 90);
        latitudSexagesimalGradosInput.setAttribute('required', true);
        latitudSexagesimalGradosInput.classList.add('effect-20');
        sexagesimalLatitudeContainer.appendChild(latitudSexagesimalGradosInput);

        const latitudSexagesimalMinutosInput = document.createElement('input');
        latitudSexagesimalMinutosInput.setAttribute('id', 'latitud-sexagesimal-minutos-input');
        latitudSexagesimalMinutosInput.setAttribute('type', 'number');
        latitudSexagesimalMinutosInput.setAttribute('name', 'latitudSexagesimalMinutos');
        latitudSexagesimalMinutosInput.setAttribute('min', 0);
        latitudSexagesimalMinutosInput.setAttribute('max', 59);
        latitudSexagesimalMinutosInput.setAttribute('required', true);
        latitudSexagesimalGradosInput.classList.add('effect-20');
        sexagesimalLatitudeContainer.appendChild(latitudSexagesimalMinutosInput);
        
        const latitudSexagesimalSegundosInput = document.createElement('input');
        latitudSexagesimalSegundosInput.setAttribute('id', 'latitud-sexagesimal-segundos-input');
        latitudSexagesimalSegundosInput.setAttribute('type', 'number');
        latitudSexagesimalSegundosInput.setAttribute('name', 'latitudSexagesimalSegundos');
        latitudSexagesimalSegundosInput.setAttribute('min', 0);
        latitudSexagesimalSegundosInput.setAttribute('max', 59);
        latitudSexagesimalSegundosInput.setAttribute('required', true);
        latitudSexagesimalGradosInput.classList.add('effect-20');
        sexagesimalLatitudeContainer.appendChild(latitudSexagesimalSegundosInput);
        /////////////////////
        //longitud sexagesimal
        const longitudSexagesimalLabel = document.createElement('label');
        longitudSexagesimalLabel.setAttribute('for', 'longitud-sexagesimal-grados-input');
        longitudSexagesimalLabel.textContent = 'Longitud:';
        sexagesimalLongitudeContainer.appendChild(longitudSexagesimalLabel);

        const longitudSexagesimalGradosInput = document.createElement('input');
        longitudSexagesimalGradosInput.setAttribute('id', 'longitud-sexagesimal-grados-input');
        longitudSexagesimalGradosInput.setAttribute('type', 'number');
        longitudSexagesimalGradosInput.setAttribute('name', 'latitudSexagesimalGrados');
        longitudSexagesimalGradosInput.setAttribute('min', 0);
        longitudSexagesimalGradosInput.setAttribute('max', 90);
        longitudSexagesimalGradosInput.setAttribute('required', true);
        sexagesimalLongitudeContainer.appendChild(longitudSexagesimalGradosInput);

        const longitudSexagesimalMinutosInput = document.createElement('input');
        longitudSexagesimalMinutosInput.setAttribute('id', 'longitud-sexagesimal-minutos-input');
        longitudSexagesimalMinutosInput.setAttribute('type', 'number');
        longitudSexagesimalMinutosInput.setAttribute('name', 'latitudSexagesimalMinutos');
        longitudSexagesimalMinutosInput.setAttribute('min', 0);
        longitudSexagesimalMinutosInput.setAttribute('max', 59);
        longitudSexagesimalMinutosInput.setAttribute('required', true);
        sexagesimalLongitudeContainer.appendChild(longitudSexagesimalMinutosInput);
        
        const longitudSexagesimalSegundosInput = document.createElement('input');
        longitudSexagesimalSegundosInput.setAttribute('id', 'longitud-sexagesimal-segundos-input');
        longitudSexagesimalSegundosInput.setAttribute('type', 'number');
        longitudSexagesimalSegundosInput.setAttribute('name', 'latitudSexagesimalSegundos');
        longitudSexagesimalSegundosInput.setAttribute('min', 0);
        longitudSexagesimalSegundosInput.setAttribute('max', 59);
        longitudSexagesimalSegundosInput.setAttribute('required', true);
        sexagesimalLongitudeContainer.appendChild(longitudSexagesimalSegundosInput);
        //additions
        const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'button');
        submitButton.textContent = 'Ubicar';
        decimalCoordinatesContainer.appendChild(decimalLabel);
        decimalCoordinatesContainer.appendChild(latitudDecimalContainer);
        decimalCoordinatesContainer.appendChild(longitudDecimalContainer);
        form.appendChild(decimalCoordinatesContainer);
        sexagesimalCoordinatesContainer.appendChild(sexagesimalLabel);
        sexagesimalCoordinatesContainer.appendChild(sexagesimalLatitudeContainer);
        sexagesimalCoordinatesContainer.appendChild(sexagesimalLongitudeContainer);
        form.appendChild(sexagesimalCoordinatesContainer);        
        form.appendChild(submitButton);

        submitButton.addEventListener('click', () => {

            const convertToDecimal = (degrees, minutes, seconds) => {                
                let decimal = degrees + (minutes / 60) + (seconds / 3600);
                return decimal;
            }

            const getDecimalCoordinates = () => {
                try {
                    let lat = document.getElementById('latitud-decimal-input').value;
                    let lon = document.getElementById('longitud-decimal-input').value;                    
                    return [Number(lon), Number(lat)]
                } catch (error) {
                    console.lg('error en las coordenadas ingresadas', error)
                }                
            }
            
            const getSexagesimalCoordinates = () => {
                let lonGrades = Number(document.getElementById('longitud-sexagesimal-grados-input').value);
                let lonMinutes = Number(document.getElementById('longitud-sexagesimal-minutos-input').value);
                let lonSeconds = Number(document.getElementById('longitud-sexagesimal-segundos-input').value);

                let latGrades = Number(document.getElementById('latitud-sexagesimal-grados-input').value);
                let latMinutes = Number(document.getElementById('latitud-sexagesimal-minutos-input').value);
                let latSeconds = Number(document.getElementById('latitud-sexagesimal-segundos-input').value);            

                return [convertToDecimal(lonGrades, lonMinutes, lonSeconds), convertToDecimal(latGrades, latMinutes, latSeconds)]
            }
            
            mapView.goTo({
                target: decimalSystem ? getDecimalCoordinates() : getSexagesimalCoordinates(),
                zoom: 9
            });
        });
      
        return form;
    }

    function drawCoordinatesSelector () {       
        const switchElement = document.createElement('label');
        switchElement.classList.add('switch');        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';        
        const slider = document.createElement('span');
        slider.classList.add('slider');
        slider.classList.add('round');        
        switchElement.appendChild(checkbox);
        switchElement.appendChild(slider);
        
        checkbox.addEventListener('change', function() {
            const div1 = document.getElementById('decimal-coordinates-container');
            const div2 = document.getElementById('sexagesimal-coordinates-container');
            if (this.checked) {
                div1.style.display = 'none';
                div2.style.display = 'block';
                decimalSystem = false;
            } else {
                div1.style.display = 'block';
                div2.style.display = 'none';
                decimalSystem = true;

            }
            //console.log(decimalSystem);
        });
        return switchElement;
    }
    
    const flagCoordinatesForm = document.getElementById('decimal-coordinates-container');

    if (!flagCoordinatesForm) {
        const switchCoordinates = drawCoordinatesSelector();
        const coordenadasForm = createCoordenadasForm();
        goToContainer.appendChild(switchCoordinates);
        goToContainer.appendChild(coordenadasForm);  
    }
    
    return null;
}