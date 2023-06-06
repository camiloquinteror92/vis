import React, { useState, useEffect, useRef, useContext } from "react";
import { Transition } from "react-transition-group";
import { AppContext } from "../AppContext";

const BottomBar = () => {
  const { state, dispatch } = useContext(AppContext);
  const [isBarVisible, setIsBarVisible] = useState(false);
  const barRef = useRef(null);

  const toggleBarVisibility = () => {
    setIsBarVisible((prevIsBarVisible) => !prevIsBarVisible);
  };

  const transitionStyles = {
    entering: { transform: "translateY(0)" },
    entered: { transform: "translateY(0)" },
    exiting: { transform: "translateY(100%)" },
    exited: { transform: "translateY(100%)" },
  };

  useEffect(() => {
    console.log(state.featureLayersList)
    const attributeTableToggleButton = document.getElementById("tabla-de-atributos");
    if (attributeTableToggleButton) {
      attributeTableToggleButton.addEventListener("click", toggleBarVisibility);     
    }
    
    return () => {
      if (attributeTableToggleButton) {
        attributeTableToggleButton.removeEventListener("click", toggleBarVisibility);
      }
    };
    
  }, []);

  return (
    <>     
      <Transition in={isBarVisible} timeout={300} nodeRef={barRef}>        
        {(state) => (
          <div
            id='bottom-bar-container'
            ref={ barRef }
            className="bottom-bar"
            style={{ ...transitionStyles[state] }}
          >  
            <select className="bottom-bar-layer-select">             
            </select>          
          </div>
        )}
      </Transition>
    </>
  );
};


export default BottomBar;