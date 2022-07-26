import React from 'react';
import './BackDrop.css';

const BackDrop = ({show, click}) => {
    return (
        show && <div className="backdrop" onClick={click}> </div> 
        // show && {click, show} 
    )
}

export default BackDrop
