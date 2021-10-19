import React from 'react';

//Creating a scroll bar using styling inside the div then accessing the 'Scroll' child located in './App.js'
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '550px'}}>
            {props.children}
        </div> 
    );   
};

export default Scroll;